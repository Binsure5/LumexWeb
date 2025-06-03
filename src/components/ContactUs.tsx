import React from 'react';

interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

interface ContactUsProps {
  title: string;
  description: string;
  contactInfo: ContactInfo;
}

const ContactUs: React.FC<ContactUsProps> = ({ title, description, contactInfo }) => {
  return (
    <section className="py-20 px-4 bg-white w-full">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          {title}
        </h2>
        
        <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
          {description}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl text-blue-600 mb-4">
              ✉️
            </div>
            <h3 className="text-lg font-semibold mb-2">이메일</h3>
            <p className="text-gray-600">{contactInfo.email}</p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl text-blue-600 mb-4">
              📞
            </div>
            <h3 className="text-lg font-semibold mb-2">전화</h3>
            <p className="text-gray-600">{contactInfo.phone}</p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl text-blue-600 mb-4">
              📍
            </div>
            <h3 className="text-lg font-semibold mb-2">주소</h3>
            <p className="text-gray-600">{contactInfo.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs; 