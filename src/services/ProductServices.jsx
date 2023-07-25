import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  getFirestore,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

const ProductServices = {
  getListProduct: async () => {
    try {
      const productRef = collection(db, "product");
      const snapshot = await getDocs(productRef);
      const productList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return productList;
    } catch (error) {
      console.log(error);
      return 2;
    }
  },
  addProduct: async (newProduct) => {
    try {
      const productRef = collection(db, "product");
      const resProduct = await addDoc(productRef, newProduct);
      if (resProduct) {
        return 1;
      } else {
        return 2;
      }
    } catch (error) {
      console.error("Error adding product: ", error);
    }
  },
  deleteProduct: async (productId) => {
    try {
      const productDocRef = doc(db, "product", productId);
      await deleteDoc(productDocRef);
      console.log("Product deleted successfully!");
      return 1;
    } catch (error) {
      console.error("Error deleting product: ", error);
      return 2;
    }
  },

  editProduct: async (productId, updatedProduct) => {
    try {
      const productDocRef = doc(db, "product", productId);
      await updateDoc(productDocRef, updatedProduct);
      console.log("Product edit successfully!");
      return 1;
    } catch (error) {
      console.error("Error edit product: ", error);
      return 2;
    }
  },
  async uploadImage(selectedImage) {
    const storage = getStorage();
    try {
      if (selectedImage) {
        const randomName = uuidv4();
        const storageRef = ref(storage, `images/${randomName}`);

        await uploadBytes(storageRef, selectedImage);

        const url = await getDownloadURL(storageRef);
        return url;
      } else {
        return 2;
      }
    } catch (error) {
      console.error("Lỗi khi tải lên hình ảnh:", error);
      return 2;
    }
  },
};

export default ProductServices;
