import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../lang/eng.json';
import viTranslation from '../lang/vi.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      vi: {
        translation: viTranslation
      }
    },
    lng: 'vi', // Ngôn ngữ mặc định
    fallbackLng: 'en', // Ngôn ngữ dự phòng nếu không tìm thấy ngôn ngữ hiện tại
    interpolation: {
      escapeValue: false // Không escape các giá trị dịch
    }
  });

export default i18n;
