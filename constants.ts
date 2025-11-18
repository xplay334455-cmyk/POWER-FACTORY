import { Product, Feature } from './types';

export const APP_NAME = "POWER FACTORY";
export const APP_NAME_AR = "باور فاكتوري";

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    title: 'أساسيات الكاليثنكس',
    description: 'الكتاب الشامل للمبتدئين لبناء القوة من الصفر.',
    price: '٢٩.٩٩$',
    imageType: 'book',
    features: ['بدون معدات', 'شرح مصور', 'خطط تغذية']
  },
  {
    id: 'p2',
    title: 'برنامج الوحش - ٨ أسابيع',
    description: 'برنامج تدريبي مكثف للمستوى المتوسط والمتقدم.',
    price: '٤٩.٩٩$',
    imageType: 'program',
    features: ['فيديو توضيحي', 'متابعة أسبوعية', 'زيادة القوة الانفجارية']
  },
  {
    id: 'p3',
    title: 'إتقان الوقوف على اليدين',
    description: 'دليل تخصصي لتعلم التوازن والوقوف على اليدين.',
    price: '١٩.٩٩$',
    imageType: 'book',
    features: ['تمارين التوازن', 'تقوية الأكتاف', 'تجنب الإصابات']
  }
];

export const FEATURES: Feature[] = [
  {
    id: 'f1',
    title: 'تدريب في أي مكان',
    description: 'لا تحتاج إلى صالة رياضية. الأرض هي ناديك.',
    icon: 'target'
  },
  {
    id: 'f2',
    title: 'قوة حقيقية',
    description: 'ابنِ عضلات وظيفية وقوة يمكن استخدامها في الحياة.',
    icon: 'muscle'
  },
  {
    id: 'f3',
    title: 'مجتمع الأبطال',
    description: 'انضم إلى آلاف الرياضيين العرب في مجتمعنا الخاص.',
    icon: 'bolt'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'أحمد السيد',
    role: 'لاعب كاليثنكس',
    text: 'البرامج غيرت حياتي. بدأت من الصفر والآن أستطيع القيام بحركات متقدمة.',
    rating: 5
  },
  {
    id: 2,
    name: 'سارة علي',
    role: 'مشتركة في برنامج الوحش',
    text: 'الشرح واضح جداً والنتائج ظهرت في أول 4 أسابيع. أنصح به بشدة.',
    rating: 5
  },
  {
    id: 3,
    name: 'محمود حسن',
    role: 'مدرب شخصي',
    text: 'المحتوى العلمي في الكتب ممتاز ومبني على أسس صحيحة.',
    rating: 5
  }
];