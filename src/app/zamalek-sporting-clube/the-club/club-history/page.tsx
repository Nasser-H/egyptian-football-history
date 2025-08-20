'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Calendar, Crown, User } from 'lucide-react';

interface President {
  id: number;
  name: string;
  nameArabic?: string;
  period: string;
  nationality?: string;
  isFounder?: boolean;
  termNumber?: number;
  image?: string;
  isAppointed?: boolean;
}

interface NameChange {
  name: string;
  nameArabic: string;
  period: string;
  color?: string;
}

interface ZamalekHistoryProps {
  presidents?: President[];
  nameChanges?: NameChange[];
}

export default function ZamalekHistory({ presidents = [], nameChanges = [] }: ZamalekHistoryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Sample data if no props provided
  const defaultNameChanges: NameChange[] = [
    { name: "Kasr El-Nile Club", nameArabic: "نادي قصر النيل", period: "1911-1913", color: "blue" },
    { name: "Al-Mokhtalat Club", nameArabic: "النادي المختلط", period: "1913-1941", color: "green" },
    { name: "Farouk Club", nameArabic: "نادي فاروق", period: "1941-1952", color: "purple" },
    { name: "Zamalek Sporting Club", nameArabic: "نادي الزمالك الرياضي", period: "منذ 1952", color: "red" }
  ];

  const defaultPresidents: President[] = [
    {
      id: 1,
      name: "Marzbach",
      nameArabic: "مارزباخ",
      period: "1911-1915",
      nationality: "Belgium",
      isFounder: true,
      image: "https://via.placeholder.com/80x80/FF0000/FFFFFF?text=M"
    },
    {
      id: 2,
      name: "Bianchi",
      nameArabic: "بيانكي",
      period: "1915-1917",
      nationality: "Belgium",
      image: "https://via.placeholder.com/80x80/FF0000/FFFFFF?text=B"
    },
    {
      id: 3,
      name: "Dr. Mohamed Badr",
      nameArabic: "د. محمد بدر",
      period: "1917-1919",
      image: "https://via.placeholder.com/80x80/FF0000/FFFFFF?text=MB"
    },
    {
      id: 4,
      name: "Mohamed Heidar",
      nameArabic: "محمد حيدر باشا",
      period: "1923-1952",
      image: "https://via.placeholder.com/80x80/FF0000/FFFFFF?text=MH"
    },
    {
      id: 5,
      name: "Mahmoud Shawki",
      nameArabic: "محمود شوقي",
      period: "1952-1955",
      image: "https://via.placeholder.com/80x80/FF0000/FFFFFF?text=MS"
    },
    {
      id: 6,
      name: "Abdel Hamid El-Shawarbi",
      nameArabic: "عبد الحميد الشواربي",
      period: "1955-1955",
      image: "https://via.placeholder.com/80x80/FF0000/FFFFFF?text=AS"
    },
    {
      id: 7,
      name: "Mahmoud Shawki",
      nameArabic: "محمود شوقي",
      period: "1955-1956",
      termNumber: 2,
      image: "https://via.placeholder.com/80x80/FF0000/FFFFFF?text=MS"
    },
    {
      id: 8,
      name: "Abdel Latif Abou Regaila",
      nameArabic: "عبد اللطيف أبو رجيلة",
      period: "1956-1961",
      image: "https://via.placeholder.com/80x80/FF0000/FFFFFF?text=AR"
    },
    {
      id: 9,
      name: "Elwi El-Gazzar",
      nameArabic: "علوي الجزار",
      period: "1961-1962",
      image: "https://via.placeholder.com/80x80/FF0000/FFFFFF?text=EG"
    },
    {
      id: 10,
      name: "Hassan Amer",
      nameArabic: "حسن عامر",
      period: "1962-1967",
      image: "https://via.placeholder.com/80x80/FF0000/FFFFFF?text=HA"
    },
    {
      id: 11,
      name: "Mohamed Hassan Helmi",
      nameArabic: "محمد حسن حلمي",
      period: "1967-1971",
      image: "https://via.placeholder.com/80x80/FF0000/FFFFFF?text=MH"
    },
    {
      id: 12,
      name: "Tawfik El-Kheshin",
      nameArabic: "توفيق الخشين",
      period: "1971-1972",
      image: "https://via.placeholder.com/80x80/FF0000/FFFFFF?text=TK"
    },
    {
      id: 13,
      name: "Mohamed Hassan Helmi",
      nameArabic: "محمد حسن حلمي",
      period: "1974-1980",
      termNumber: 2,
      image: "https://via.placeholder.com/80x80/FF0000/FFFFFF?text=MH"
    },
    {
      id: 14,
      name: "Mohamed Hassan Helmi",
      nameArabic: "محمد حسن حلمي",
      period: "1980-1984",
      termNumber: 3,
      image: "https://via.placeholder.com/80x80/FF0000/FFFFFF?text=MH"
    },
    {
      id: 15,
      name: "Hassan Amer",
      nameArabic: "حسن عامر",
      period: "1984-1988",
      termNumber: 2,
      image: "https://via.placeholder.com/80x80/FF0000/FFFFFF?text=HA"
    },
    {
      id: 16,
      name: "Hassan Aboul Fotouh",
      nameArabic: "حسن أبو الفتوح",
      period: "1988-1990",
      image: "https://via.placeholder.com/80x80/FF0000/FFFFFF?text=HF"
    },
    {
      id: 17,
      name: "Nour El-Dali",
      nameArabic: "نور الدالي",
      period: "1990-1992",
      image: "https://via.placeholder.com/80x80/FF0000/FFFFFF?text=ND"
    },
    {
      id: 18,
      name: "Galal Ibrahim",
      nameArabic: "جلال إبراهيم",
      period: "1992-1996",
      image: "https://via.placeholder.com/80x80/FF0000/FFFFFF?text=GI"
    },
    {
      id: 19,
      name: "Dr. Kamal Darwish",
      nameArabic: "د. كمال درويش",
      period: "1996-2001",
      image: "https://via.placeholder.com/80x80/FF0000/FFFFFF?text=KD"
    },
    {
      id: 20,
      name: "Dr. Kamal Darwish",
      nameArabic: "د. كمال درويش",
      period: "2001-2005",
      termNumber: 2,
      image: "https://via.placeholder.com/80x80/FF0000/FFFFFF?text=KD"
    },
    {
      id: 21,
      name: "Mortada Mansour",
      nameArabic: "مرتضى منصور",
      period: "2005",
      image: "https://via.placeholder.com/80x80/FF0000/FFFFFF?text=MM"
    },
    {
      id: 22,
      name: "Morsi Atallah",
      nameArabic: "مرسي عطا الله",
      period: "2006",
      isAppointed: true,
      image: "https://via.placeholder.com/80x80/FF0000/FFFFFF?text=MA"
    },
    {
      id: 23,
      name: "Mamdouh Abbas",
      nameArabic: "ممدوح عباس",
      period: "2007-2008",
      isAppointed: true,
      image: "https://via.placeholder.com/80x80/FF0000/FFFFFF?text=MA"
    },
    {
      id: 24,
      name: "Dr. Mohamed Amer",
      nameArabic: "د. محمد عامر",
      period: "2009",
      isAppointed: true,
      image: "https://via.placeholder.com/80x80/FF0000/FFFFFF?text=MA"
    },
    {
      id: 25,
      name: "Mamdouh Abbas",
      nameArabic: "ممدوح عباس",
      period: "الحالي",
      termNumber: 2,
      image: "https://via.placeholder.com/80x80/FF0000/FFFFFF?text=MA"
    }
  ];

  const displayNameChanges = nameChanges.length > 0 ? nameChanges : defaultNameChanges;
  const displayPresidents = presidents.length > 0 ? presidents : defaultPresidents;

  const getColorClass = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 border-blue-200 text-blue-800',
      green: 'bg-green-50 border-green-200 text-green-800',
      purple: 'bg-purple-50 border-purple-200 text-purple-800',
      red: 'bg-red-50 border-red-200 text-red-800'
    };
    return colors[color as keyof typeof colors] || 'bg-gray-50 border-gray-200 text-gray-800';
  };

  return <>
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-full mb-6 shadow-lg">
            <Crown className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            تاريخ نادي الزمالك الرياضي
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            تأسس في 5 يناير 1911
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full"></div>
        </div>

        {/* Name Changes Section */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center">
                <Calendar className="w-8 h-8 mr-3 text-red-600" />
                تطور أسماء النادي
              </h2>
              <p className="text-gray-600">رحلة النادي عبر التاريخ من خلال تغيير الأسماء</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayNameChanges.map((nameChange, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 ${getColorClass(nameChange.color || 'red')}`}
                >
                  <div className="text-center">
                    <div className="mb-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-white rounded-full text-sm font-bold shadow-sm">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">{nameChange.nameArabic}</h3>
                    <p className="text-sm opacity-75 mb-2">{nameChange.name}</p>
                    <div className="bg-white bg-opacity-50 rounded-lg px-3 py-1">
                      <span className="text-sm font-semibold">{nameChange.period}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Presidents Section */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center">
                <Crown className="w-8 h-8 mr-3 text-red-600" />
                رؤساء النادي عبر التاريخ
              </h2>
              <p className="text-gray-600">القيادات التي شكلت تاريخ النادي العريق</p>
            </div>

            <div className="space-y-4">
              {displayPresidents.map((president, index) => (
                <div
                  key={president.id}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-red-50 transition-all duration-300 hover:shadow-md border border-gray-200 hover:border-red-200"
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                    {/* President Image */}
                    <div className="flex-shrink-0">
                      {president.image ? (
                        <div
                          className="w-20 h-20 rounded-full overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200 shadow-lg"
                          onClick={() => setSelectedImage(president.image!)}
                        >
                          <Image
                            src={president.image}
                            alt={president.nameArabic || president.name}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                          <User className="w-8 h-8 text-white" />
                        </div>
                      )}
                    </div>

                    {/* President Info */}
                    <div className="flex-1 text-center md:text-right">
                      <div className="mb-2">
                        <h3 className="text-xl font-bold text-gray-800 mb-1">
                          {president.nameArabic || president.name}
                        </h3>
                        {president.nameArabic && (
                          <p className="text-gray-600 text-sm">{president.name}</p>
                        )}
                      </div>

                      <div className="flex flex-wrap justify-center md:justify-end gap-2 mb-3">
                        {/* Period Badge */}
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                          {president.period}
                        </span>

                        {/* Term Number */}
                        {president.termNumber && (
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            الفترة {president.termNumber}
                          </span>
                        )}

                        {/* Nationality */}
                        {president.nationality && (
                          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                            {president.nationality}
                          </span>
                        )}

                        {/* Founder Badge */}
                        {president.isFounder && (
                          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                            المؤسس
                          </span>
                        )}

                        {/* Appointed Badge */}
                        {president.isAppointed && (
                          <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                            معين
                          </span>
                        )}
                      </div>
                    </div>

                    {/* President Number */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">
                          {president.termNumber ? `${index + 1 - (displayPresidents.filter((p, i) => i < index && p.name === president.name).length)}` : index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Note about appointed presidents */}
            <div className="mt-8 p-4 bg-orange-50 rounded-lg border border-orange-200">
              <p className="text-orange-800 text-sm text-center">
                <span className="font-semibold">ملحوظة:</span> الرؤساء المعينون تم تعيينهم من قبل المجلس الأعلى للرياضة وليس بالانتخاب
              </p>
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative w-full h-full max-w-2xl max-h-full">
              <Image
                src={selectedImage}
                alt="صورة مكبرة"
                fill
                style={{ objectFit: "contain" }}
                className="rounded-lg"
              />
            </div>
            <button
              className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-all"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-16 pb-8">
          <p className="text-gray-500">
            موقع تاريخ الكرة المصرية - حفظ التراث الكروي المصري
          </p>
        </div>
      </div>
    </div>
</>
}