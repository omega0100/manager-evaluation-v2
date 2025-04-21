import { useState } from "react";

export default function ManagerEvaluationForm() {
  const [language, setLanguage] = useState("english");
  
  // Translations for all text in the form
  const translations = {
    english: {
      title: "Manager Evaluation Form",
      subtitle: "Anonymous Feedback for Management Development",
      instructions: "Please provide honest feedback about your manager. Your responses are anonymous and will be used for professional development purposes.",
      managerName: "Manager's Name",
      department: "Department",
      evaluationPeriod: "Evaluation Period",
      section1: "Management Style Assessment",
      section2: "Development and Growth Support",
      section3: "Feedback on Effectiveness",
      section4: "Recommendations for Improvement",
      communicationLabel: "Communication Skills",
      communicationPlaceholder: "Additional comments on communication skills",
      leadershipLabel: "Leadership Approach",
      leadershipPlaceholder: "Additional comments on leadership style",
      decisionMakingLabel: "Decision Making",
      decisionMakingPlaceholder: "Additional comments on decision making process",
      supportLabel: "Professional Development Support",
      supportPlaceholder: "Additional comments on development support",
      opportunitiesLabel: "Growth Opportunities",
      opportunitiesPlaceholder: "Additional comments on growth opportunities provided",
      feedbackQualityLabel: "Quality of Feedback",
      feedbackQualityPlaceholder: "Additional comments on feedback quality",
      strengthsLabel: "Manager's Greatest Strengths",
      strengthsPlaceholder: "What does your manager do exceptionally well?",
      weaknessesLabel: "Areas for Improvement",
      weaknessesPlaceholder: "What specific areas could your manager improve upon?",
      recommendationsLabel: "Development Recommendations",
      recommendationsPlaceholder: "What specific steps or training would help your manager improve?",
      additionalLabel: "Additional Comments",
      additionalPlaceholder: "Any other feedback not covered above",
      submitButton: "Submit Evaluation",
      resetButton: "Reset Form",
      languageButton: "العربية",
      formSubmitted: "Thank you! Your evaluation has been submitted.",
      poor: "Poor",
      belowAverage: "Below Average",
      average: "Average",
      good: "Good",
      excellent: "Excellent",
      required: "Required",
      ratings: {
        1: "Poor",
        2: "Below Average",
        3: "Average", 
        4: "Good",
        5: "Excellent"
      }
    },
    arabic: {
      title: "نموذج تقييم المدير",
      subtitle: "ملاحظات مجهولة المصدر لتطوير الإدارة",
      instructions: "يرجى تقديم ملاحظات صادقة حول مديرك. ردودك مجهولة المصدر وستستخدم لأغراض التطوير المهني.",
      managerName: "اسم المدير",
      department: "القسم",
      evaluationPeriod: "فترة التقييم",
      section1: "تقييم أسلوب الإدارة",
      section2: "دعم التطوير والنمو",
      section3: "ملاحظات حول الفعالية",
      section4: "توصيات للتحسين",
      communicationLabel: "مهارات التواصل",
      communicationPlaceholder: "تعليقات إضافية حول مهارات التواصل",
      leadershipLabel: "أسلوب القيادة",
      leadershipPlaceholder: "تعليقات إضافية حول أسلوب القيادة",
      decisionMakingLabel: "اتخاذ القرارات",
      decisionMakingPlaceholder: "تعليقات إضافية حول عملية اتخاذ القرار",
      supportLabel: "دعم التطوير المهني",
      supportPlaceholder: "تعليقات إضافية حول دعم التطوير",
      opportunitiesLabel: "فرص النمو",
      opportunitiesPlaceholder: "تعليقات إضافية حول فرص النمو المقدمة",
      feedbackQualityLabel: "جودة التعليقات",
      feedbackQualityPlaceholder: "تعليقات إضافية حول جودة الملاحظات",
      strengthsLabel: "أهم نقاط قوة المدير",
      strengthsPlaceholder: "ما الذي يفعله مديرك بشكل استثنائي؟",
      weaknessesLabel: "مجالات التحسين",
      weaknessesPlaceholder: "ما هي المجالات المحددة التي يمكن لمديرك تحسينها؟",
      recommendationsLabel: "توصيات التطوير",
      recommendationsPlaceholder: "ما هي الخطوات المحددة أو التدريب الذي سيساعد مديرك على التحسين؟",
      additionalLabel: "تعليقات إضافية",
      additionalPlaceholder: "أي ملاحظات أخرى لم يتم تناولها أعلاه",
      submitButton: "إرسال التقييم",
      resetButton: "إعادة تعيين النموذج",
      languageButton: "English",
      formSubmitted: "شكرا لك! تم تقديم تقييمك.",
      poor: "ضعيف",
      belowAverage: "دون المتوسط",
      average: "متوسط",
      good: "جيد",
      excellent: "ممتاز",
      required: "مطلوب",
      ratings: {
        1: "ضعيف",
        2: "دون المتوسط",
        3: "متوسط", 
        4: "جيد",
        5: "ممتاز"
      }
    }
  };
  
  const text = translations[language];
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    managerName: "",
    department: "",
    evaluationPeriod: "",
    communicationRating: 0,
    communicationComments: "",
    leadershipRating: 0,
    leadershipComments: "",
    decisionMakingRating: 0,
    decisionMakingComments: "",
    supportRating: 0,
    supportComments: "",
    opportunitiesRating: 0,
    opportunitiesComments: "",
    feedbackQualityRating: 0,
    feedbackQualityComments: "",
    approachabilityRating: 0,
    teamworkRating: 0,
    organizationRating: 0,
    strengths: "",
    weaknesses: "",
    recommendations: "",
    additional: ""
  });
  
  const toggleLanguage = () => {
    setLanguage(language === "english" ? "arabic" : "english");
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleRatingChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log(formData);
    setFormSubmitted(true);
  };
  
  const resetForm = () => {
    setFormData({
      managerName: "",
      department: "",
      evaluationPeriod: "",
      communicationRating: 0,
      communicationComments: "",
      leadershipRating: 0,
      leadershipComments: "",
      decisionMakingRating: 0,
      decisionMakingComments: "",
      supportRating: 0,
      supportComments: "",
      opportunitiesRating: 0,
      opportunitiesComments: "",
      feedbackQualityRating: 0,
      feedbackQualityComments: "",
      approachabilityRating: 0,
      teamworkRating: 0,
      organizationRating: 0,
      strengths: "",
      weaknesses: "",
      recommendations: "",
      additional: ""
    });
    setFormSubmitted(false);
  };
  
  const rtl = language === "arabic" ? "rtl" : "ltr";
  const textAlign = language === "arabic" ? "text-right" : "text-left";

  // Rating scale component
  const RatingScale = ({ name, value, onChange }) => {
    return (
      <div className="flex flex-wrap items-center justify-between mt-2 gap-2">
        {[1, 2, 3, 4, 5].map((rating) => (
          <div key={rating} className="flex items-center">
            <input
              type="radio"
              id={`${name}-${rating}`}
              name={name}
              value={rating}
              checked={parseInt(value) === rating}
              onChange={() => onChange(name, rating)}
              className="mr-2"
            />
            <label 
              htmlFor={`${name}-${rating}`} 
              className={`cursor-pointer text-sm ${parseInt(value) === rating ? 'font-bold' : ''}`}
            >
              {rating} - {text.ratings[rating]}
            </label>
          </div>
        ))}
      </div>
    );
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-8" dir={rtl}>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-700 p-6 text-white">
          <div className="flex justify-between items-center">
            <h1 className={`text-2xl font-bold ${textAlign}`}>{text.title}</h1>
            <button
              onClick={toggleLanguage}
              className="bg-white text-blue-700 px-4 py-2 rounded-md hover:bg-blue-50 transition-colors"
            >
              {text.languageButton}
            </button>
          </div>
          <p className={`mt-2 text-blue-100 ${textAlign}`}>{text.subtitle}</p>
        </div>
        
        {/* Form content */}
        <div className="p-6">
          <p className={`text-gray-600 mb-6 ${textAlign}`}>{text.instructions}</p>
          
          {formSubmitted ? (
            <div className="text-center p-8">
              <div className="text-green-600 text-xl mb-4">{text.formSubmitted}</div>
              <button
                onClick={resetForm}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                {text.resetButton}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className={`block text-gray-700 mb-2 ${textAlign}`}>
                    {text.managerName} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="managerName"
                    value={formData.managerName}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder={text.managerName}
                  />
                </div>
                <div>
                  <label className={`block text-gray-700 mb-2 ${textAlign}`}>
                    {text.department} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder={text.department}
                  />
                </div>
                <div>
                  <label className={`block text-gray-700 mb-2 ${textAlign}`}>
                    {text.evaluationPeriod} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="evaluationPeriod"
                    value={formData.evaluationPeriod}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder={text.evaluationPeriod}
                  />
                </div>
              </div>
              
              {/* Section 1: Management Style */}
              <div className="mt-8">
                <h2 className={`text-lg font-semibold text-blue-700 mb-4 pb-2 border-b border-gray-200 ${textAlign}`}>
                  {text.section1}
                </h2>
                
                {/* Communication Skills */}
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-md">
                    <label className={`block text-gray-700 font-medium mb-2 ${textAlign}`}>
                      {text.communicationLabel} <span className="text-red-500">*</span>
                    </label>
                    <RatingScale 
                      name="communicationRating" 
                      value={formData.communicationRating} 
                      onChange={handleRatingChange} 
                    />
                    <textarea
                      name="communicationComments"
                      value={formData.communicationComments}
                      onChange={handleChange}
                      rows="2"
                      className="w-full p-2 border border-gray-300 rounded-md mt-3"
                      placeholder={text.communicationPlaceholder}
                    ></textarea>
                  </div>
                  
                  {/* Leadership Approach */}
                  <div className="bg-gray-50 p-4 rounded-md">
                    <label className={`block text-gray-700 font-medium mb-2 ${textAlign}`}>
                      {text.leadershipLabel} <span className="text-red-500">*</span>
                    </label>
                    <RatingScale 
                      name="leadershipRating" 
                      value={formData.leadershipRating} 
                      onChange={handleRatingChange} 
                    />
                    <textarea
                      name="leadershipComments"
                      value={formData.leadershipComments}
                      onChange={handleChange}
                      rows="2"
                      className="w-full p-2 border border-gray-300 rounded-md mt-3"
                      placeholder={text.leadershipPlaceholder}
                    ></textarea>
                  </div>
                  
                  {/* Decision Making */}
                  <div className="bg-gray-50 p-4 rounded-md">
                    <label className={`block text-gray-700 font-medium mb-2 ${textAlign}`}>
                      {text.decisionMakingLabel} <span className="text-red-500">*</span>
                    </label>
                    <RatingScale 
                      name="decisionMakingRating" 
                      value={formData.decisionMakingRating} 
                      onChange={handleRatingChange} 
                    />
                    <textarea
                      name="decisionMakingComments"
                      value={formData.decisionMakingComments}
                      onChange={handleChange}
                      rows="2"
                      className="w-full p-2 border border-gray-300 rounded-md mt-3"
                      placeholder={text.decisionMakingPlaceholder}
                    ></textarea>
                  </div>
                  
                  {/* Additional management skills */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-md">
                      <label className={`block text-gray-700 font-medium mb-2 ${textAlign}`}>
                        {language === "english" ? "Approachability" : "سهولة التواصل"} <span className="text-red-500">*</span>
                      </label>
                      <RatingScale 
                        name="approachabilityRating" 
                        value={formData.approachabilityRating} 
                        onChange={handleRatingChange} 
                      />
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <label className={`block text-gray-700 font-medium mb-2 ${textAlign}`}>
                        {language === "english" ? "Team Building" : "بناء الفريق"} <span className="text-red-500">*</span>
                      </label>
                      <RatingScale 
                        name="teamworkRating" 
                        value={formData.teamworkRating} 
                        onChange={handleRatingChange} 
                      />
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <label className={`block text-gray-700 font-medium mb-2 ${textAlign}`}>
                        {language === "english" ? "Organization & Planning" : "التنظيم والتخطيط"} <span className="text-red-500">*</span>
                      </label>
                      <RatingScale 
                        name="organizationRating" 
                        value={formData.organizationRating} 
                        onChange={handleRatingChange} 
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Section 2: Development and Growth */}
              <div className="mt-8">
                <h2 className={`text-lg font-semibold text-blue-700 mb-4 pb-2 border-b border-gray-200 ${textAlign}`}>
                  {text.section2}
                </h2>
                <div className="space-y-6">
                  {/* Support */}
                  <div className="bg-gray-50 p-4 rounded-md">
                    <label className={`block text-gray-700 font-medium mb-2 ${textAlign}`}>
                      {text.supportLabel} <span className="text-red-500">*</span>
                    </label>
                    <RatingScale 
                      name="supportRating" 
                      value={formData.supportRating} 
                      onChange={handleRatingChange} 
                    />
                    <textarea
                      name="supportComments"
                      value={formData.supportComments}
                      onChange={handleChange}
                      rows="2"
                      className="w-full p-2 border border-gray-300 rounded-md mt-3"
                      placeholder={text.supportPlaceholder}
                    ></textarea>
                  </div>
                  
                  {/* Opportunities */}
                  <div className="bg-gray-50 p-4 rounded-md">
                    <label className={`block text-gray-700 font-medium mb-2 ${textAlign}`}>
                      {text.opportunitiesLabel} <span className="text-red-500">*</span>
                    </label>
                    <RatingScale 
                      name="opportunitiesRating" 
                      value={formData.opportunitiesRating} 
                      onChange={handleRatingChange} 
                    />
                    <textarea
                      name="opportunitiesComments"
                      value={formData.opportunitiesComments}
                      onChange={handleChange}
                      rows="2"
                      className="w-full p-2 border border-gray-300 rounded-md mt-3"
                      placeholder={text.opportunitiesPlaceholder}
                    ></textarea>
                  </div>
                  
                  {/* Feedback Quality */}
                  <div className="bg-gray-50 p-4 rounded-md">
                    <label className={`block text-gray-700 font-medium mb-2 ${textAlign}`}>
                      {text.feedbackQualityLabel} <span className="text-red-500">*</span>
                    </label>
                    <RatingScale 
                      name="feedbackQualityRating" 
                      value={formData.feedbackQualityRating} 
                      onChange={handleRatingChange} 
                    />
                    <textarea
                      name="feedbackQualityComments"
                      value={formData.feedbackQualityComments}
                      onChange={handleChange}
                      rows="2"
                      className="w-full p-2 border border-gray-300 rounded-md mt-3"
                      placeholder={text.feedbackQualityPlaceholder}
                    ></textarea>
                  </div>
                </div>
              </div>
              
              {/* Section 3: Feedback on Effectiveness */}
              <div className="mt-8">
                <h2 className={`text-lg font-semibold text-blue-700 mb-4 pb-2 border-b border-gray-200 ${textAlign}`}>
                  {text.section3}
                </h2>
                <div className="space-y-6">
                  {/* Strengths */}
                  <div>
                    <label className={`block text-gray-700 mb-2 ${textAlign}`}>
                      {text.strengthsLabel} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="strengths"
                      value={formData.strengths}
                      onChange={handleChange}
                      required
                      rows="3"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder={text.strengthsPlaceholder}
                    ></textarea>
                  </div>
                  
                  {/* Weaknesses */}
                  <div>
                    <label className={`block text-gray-700 mb-2 ${textAlign}`}>
                      {text.weaknessesLabel} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="weaknesses"
                      value={formData.weaknesses}
                      onChange={handleChange}
                      required
                      rows="3"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder={text.weaknessesPlaceholder}
                    ></textarea>
                  </div>
                </div>
              </div>
              
              {/* Section 4: Recommendations */}
              <div className="mt-8">
                <h2 className={`text-lg font-semibold text-blue-700 mb-4 pb-2 border-b border-gray-200 ${textAlign}`}>
                  {text.section4}
                </h2>
                <div className="space-y-6">
                  {/* Recommendations */}
                  <div>
                    <label className={`block text-gray-700 mb-2 ${textAlign}`}>
                      {text.recommendationsLabel} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="recommendations"
                      value={formData.recommendations}
                      onChange={handleChange}
                      required
                      rows="3"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder={text.recommendationsPlaceholder}
                    ></textarea>
                  </div>
                  
                  {/* Additional Comments */}
                  <div>
                    <label className={`block text-gray-700 mb-2 ${textAlign}`}>
                      {text.additionalLabel}
                    </label>
                    <textarea
                      name="additional"
                      value={formData.additional}
                      onChange={handleChange}
                      rows="3"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder={text.additionalPlaceholder}
                    ></textarea>
                  </div>
                </div>
              </div>
              
              {/* Submit button */}
              <div className="mt-8 flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                >
                  {text.resetButton}
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  {text.submitButton}
                </button>
              </div>
            </form>
          )}
        </div>
        
        {/* Footer */}
        <div className="bg-gray-100 p-4 text-center text-gray-500 text-sm">
          {language === "english" ? 
            "This form is anonymous. No personal identifiers are collected from employees." : 
            "هذا النموذج مجهول. لا يتم جمع معرفات شخصية من الموظفين."
          }
        </div>
      </div>
    </div>
  );
}