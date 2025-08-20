'use client'
import React, { useState } from 'react';
import { Calendar, Trophy, Users, MapPin, Image, Link, Play, FileText, ExternalLink } from 'lucide-react';

interface Match {
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  date?: string;
  scorers?: string[];
  lineup?: string[];
  homeLogo?: string;
  awayLogo?: string;
  venue?: string;
  country?: string;
  images?: string[];
  videos?: string[];
  articles?: Array<{ title: string; url: string }>;
  documents?: Array<{ title: string; url: string }>;
  externalLinks?: Array<{ title: string; url: string }>;
}

export default function ZamalekFriendlies ({ matches = [] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Sample data if no matches provided
  const sampleMatches: Match[] = [
    {
      homeTeam: "Zamalek",
      awayTeam: "Real Madrid",
      homeScore: 1,
      awayScore: 4,
      date: "10/3/1961",
      scorers: ["Mohamed Mousa"],
      lineup: ["Aldo Stila", "Mohamed Refaei", "Raafat Ateya", "Ahmed Moustafa", "Samir Qotb", "Abdou Noshi", "Mohamed Mousa", "Essam Baheeg", "Nabil Nosair", "Alaa El-Hamouli", "Ali Mohsen", "Sherif El-Far"],
      country: "Spain",
      images: ["https://via.placeholder.com/600x400/FF0000/FFFFFF?text=Zamalek+vs+Real+Madrid+1961"],
      articles: [{ title: "تقرير المباراة التاريخية", url: "#" }]
    },
    {
      homeTeam: "Zamalek & Ahly",
      awayTeam: "Real Madrid",
      homeScore: 1,
      awayScore: 7,
      date: "22/11/1961",
      scorers: ["Ali Mohsen"],
      lineup: ["Aldo Stila", "Raafat Ateya", "Ahmed Moustafa", "Tarek Selim (From Ahly)", "Rifaat El-Fanageely (From Ahly)", "Mohamed Badawi (From Masry)", "Mohamed Mousa", "Saleh Selim (From Ahly)", "Ali Mohsen", "Ahmed Effat", "Hamada Emam"],
      country: "Spain",
      videos: ["https://www.youtube.com/embed/sample"],
      externalLinks: [{ title: "مشاهدة أهداف المباراة", url: "#" }]
    },
    {
      homeTeam: "Zamalek",
      awayTeam: "Bayern Munich",
      homeScore: 3,
      awayScore: 2,
      date: "21/12/1977",
      scorers: ["Wahid Kamel 19'", "Mohamed Taher 69'", "Ali Khalil 84'"],
      country: "West Germany",
      images: [
        "https://via.placeholder.com/600x400/FF0000/FFFFFF?text=Zamalek+vs+Bayern+1977+1",
        "https://via.placeholder.com/600x400/FF0000/FFFFFF?text=Zamalek+vs+Bayern+1977+2"
      ],
      documents: [{ title: "تشكيل الفريق الكامل", url: "#" }]
    },
    {
      homeTeam: "Zamalek",
      awayTeam: "S.S. Lazio",
      homeScore: 2,
      awayScore: 1,
      date: "3 January 2003",
      scorers: ["Tarek El-Sayed 42'", "Gamal Hamza 56'"],
      country: "Italy",
      images: ["https://via.placeholder.com/600x400/FF0000/FFFFFF?text=Zamalek+vs+Lazio+2003"],
      videos: ["https://www.youtube.com/embed/sample"],
      articles: [{ title: "انتصار تاريخي على لاتسيو الإيطالي", url: "#" }]
    },
    {
      homeTeam: "Zamalek",
      awayTeam: "Atletico Madrid",
      homeScore: 1,
      awayScore: 4,
      date: "10 Nov 2011",
      scorers: ["Ahmed Hossam 'Mido' 25' Pen"],
      country: "Spain",
      images: [
        "https://via.placeholder.com/600x400/FF0000/FFFFFF?text=Zamalek+100th+Anniversary+1",
        "https://via.placeholder.com/600x400/FF0000/FFFFFF?text=Zamalek+100th+Anniversary+2"
      ],
      videos: ["https://www.youtube.com/embed/sample"],
      externalLinks: [
        { title: "احتفالية الذكرى المئوية للزمالك", url: "#" },
        { title: "صور المباراة", url: "#" }
      ]
    }
  ];
//////////////////// Pre-obtaining data  //////////////////////////////////////
  const displayMatches = matches.length > 0 ? matches : sampleMatches;
  ////////////////////////////////////////////////////////////

  const getResultColor = (homeTeam: string, homeScore: number, awayScore: number) => {
    const isZamalekHome = homeTeam.toLowerCase().includes('zamalek');
    const zamalekScore = isZamalekHome ? homeScore : awayScore;
    const opponentScore = isZamalekHome ? awayScore : homeScore;
    
    if (zamalekScore > opponentScore) return 'text-green-600 bg-green-50 border-green-200';
    if (zamalekScore < opponentScore) return 'text-red-600 bg-red-50 border-red-200';
    return 'text-yellow-600 bg-yellow-50 border-yellow-200';
  };

  const getScoreDisplay = (homeTeam: string, homeScore: number, awayScore: number) => {
    return `${homeScore} - ${awayScore}`;
  };

  return <>
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-full mb-6 shadow-lg">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            المباريات الودية للزمالك
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            رحلة عبر تاريخ المباريات الودية العريق لنادي الزمالك
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Matches Grid */}
        <div className="space-y-6">
          {displayMatches.map((match, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                {/* Match Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                  {/* Teams and Score */}
                  <div className="flex-1">
                    <div className="flex items-center justify-center lg:justify-start space-x-8 mb-4 lg:mb-0">
                      {/* Home Team */}
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                          {match.homeLogo ? (
                            <img src={match.homeLogo} alt={match.homeTeam} className="w-8 h-8 object-contain" />
                          ) : (
                            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-sm">Z</span>
                            </div>
                          )}
                        </div>
                        <div className="text-center lg:text-right">
                          <h3 className="font-bold text-lg text-gray-800">{match.homeTeam}</h3>
                        </div>
                      </div>

                      {/* Score */}
                      <div className={`px-6 py-3 rounded-xl border-2 ${getResultColor(match.homeTeam, match.homeScore, match.awayScore)}`}>
                        <span className="text-2xl font-bold">
                          {getScoreDisplay(match.homeTeam, match.homeScore, match.awayScore)}
                        </span>
                      </div>

                      {/* Away Team */}
                      <div className="flex items-center space-x-4">
                        <div className="text-center lg:text-left">
                          <h3 className="font-bold text-lg text-gray-800">{match.awayTeam}</h3>
                          {match.country && (
                            <div className="flex items-center justify-center lg:justify-start mt-1">
                              <MapPin className="w-4 h-4 text-gray-500 mr-1" />
                              <span className="text-sm text-gray-500">({match.country})</span>
                            </div>
                          )}
                        </div>
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                          {match.awayLogo ? (
                            <img src={match.awayLogo} alt={match.awayTeam} className="w-8 h-8 object-contain" />
                          ) : (
                            <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-sm">?</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Match Date */}
                  {match.date && (
                    <div className="flex items-center justify-center lg:justify-end">
                      <div className="bg-gray-50 px-4 py-2 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span className="text-sm font-medium text-gray-700">{match.date}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Additional Details */}
                {(match.scorers || match.lineup || match.images || match.videos || match.articles || match.documents || match.externalLinks) && (
                  <div className="border-t border-gray-100 pt-4 space-y-4">
                    {/* Scorers */}
                    {match.scorers && match.scorers.length > 0 && (
                      <div className="bg-green-50 rounded-lg p-4">
                        <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                          <Trophy className="w-4 h-4 mr-2" />
                          محرزي الأهداف
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {match.scorers.map((scorer, scorerIndex) => (
                            <span
                              key={scorerIndex}
                              className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {scorer}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Lineup */}
                    {match.lineup && match.lineup.length > 0 && (
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          تشكيل الفريق
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                          {match.lineup.map((player, playerIndex) => (
                            <div
                              key={playerIndex}
                              className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm text-center font-medium"
                            >
                              {player}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Media Section */}
                    {(match.images || match.videos) && (
                      <div className="bg-purple-50 rounded-lg p-4">
                        <h4 className="font-semibold text-purple-800 mb-3 flex items-center">
                          <Image className="w-4 h-4 mr-2" />
                          الوسائط
                        </h4>
                        
                        {/* Images */}
                        {match.images && match.images.length > 0 && (
                          <div className="mb-4">
                            <h5 className="text-sm font-medium text-purple-700 mb-2">الصور</h5>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                              {match.images.map((image, imageIndex) => (
                                <div
                                  key={imageIndex}
                                  className="relative group cursor-pointer rounded-lg overflow-hidden bg-gray-100 aspect-video"
                                  onClick={() => setSelectedImage(image)}
                                >
                                  <img
                                    src={image}
                                    alt={`صورة ${imageIndex + 1}`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                                  />
                                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
                                    <Image className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Videos */}
                        {match.videos && match.videos.length > 0 && (
                          <div>
                            <h5 className="text-sm font-medium text-purple-700 mb-2">الفيديوهات</h5>
                            <div className="space-y-2">
                              {match.videos.map((video, videoIndex) => (
                                <div
                                  key={videoIndex}
                                  className="flex items-center space-x-3 bg-purple-100 rounded-lg p-3 hover:bg-purple-200 transition-colors cursor-pointer"
                                  onClick={() => window.open(video, '_blank')}
                                >
                                  <Play className="w-5 h-5 text-purple-600" />
                                  <span className="text-sm font-medium text-purple-800">فيديو المباراة {videoIndex + 1}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Links & Documents Section */}
                    {(match.articles || match.documents || match.externalLinks) && (
                      <div className="bg-orange-50 rounded-lg p-4">
                        <h4 className="font-semibold text-orange-800 mb-3 flex items-center">
                          <Link className="w-4 h-4 mr-2" />
                          الروابط والمستندات
                        </h4>
                        
                        <div className="space-y-3">
                          {/* Articles */}
                          {match.articles && match.articles.length > 0 && (
                            <div>
                              <h5 className="text-sm font-medium text-orange-700 mb-2">المقالات والتقارير</h5>
                              <div className="space-y-1">
                                {match.articles.map((article, articleIndex) => (
                                  <a
                                    key={articleIndex}
                                    href={article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-3 bg-orange-100 rounded-lg p-2 hover:bg-orange-200 transition-colors text-orange-800 text-sm"
                                  >
                                    <FileText className="w-4 h-4" />
                                    <span>{article.title}</span>
                                    <ExternalLink className="w-3 h-3 ml-auto" />
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Documents */}
                          {match.documents && match.documents.length > 0 && (
                            <div>
                              <h5 className="text-sm font-medium text-orange-700 mb-2">المستندات</h5>
                              <div className="space-y-1">
                                {match.documents.map((doc, docIndex) => (
                                  <a
                                    key={docIndex}
                                    href={doc.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-3 bg-orange-100 rounded-lg p-2 hover:bg-orange-200 transition-colors text-orange-800 text-sm"
                                  >
                                    <FileText className="w-4 h-4" />
                                    <span>{doc.title}</span>
                                    <ExternalLink className="w-3 h-3 ml-auto" />
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* External Links */}
                          {match.externalLinks && match.externalLinks.length > 0 && (
                            <div>
                              <h5 className="text-sm font-medium text-orange-700 mb-2">روابط خارجية</h5>
                              <div className="space-y-1">
                                {match.externalLinks.map((link, linkIndex) => (
                                  <a
                                    key={linkIndex}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-3 bg-orange-100 rounded-lg p-2 hover:bg-orange-200 transition-colors text-orange-800 text-sm"
                                  >
                                    <ExternalLink className="w-4 h-4" />
                                    <span>{link.title}</span>
                                    <ExternalLink className="w-3 h-3 ml-auto" />
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="صورة مكبرة"
                className="max-w-full max-h-full object-contain rounded-lg"
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
};