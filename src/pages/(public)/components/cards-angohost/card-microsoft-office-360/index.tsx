import React from "react";

type Service = {
  name: string;
  icon: string;
  link: string;
};

type CardProps = {
  title: string;
  services: Service[];
  apps?: Service[];
};

const CardMicrosoftOffice: React.FC<CardProps> = ({ title, services, apps }) => {
  return (
    <div className="max-w-sm p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4  sr-only">{title}</h2>
      <div className="mb-6">
        <h3 className="text-sm font-medium">
        Serviços cloud seguros e aplicações Web, para computador e para dispositivos móveis:
        </h3>
        <div className="flex flex-wrap gap-4 mt-2">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              className="flex flex-col items-center text-center"
            >
              <img src={service.icon} alt={service.name} className="w-8 h-8" />
              <span className="mt-1 text-sm text-blue-600">{service.name}</span>
            </a>
          ))}
        </div>
      </div>
      {apps && (
        <div>
          <h3 className="text-md font-medium">Aplicações Web e móveis:</h3>
          <div className="flex flex-wrap gap-4 mt-2">
            {apps.map((app, index) => (
              <a
                key={index}
                href={app.link}
                className="flex flex-col items-center text-center"
              >
                <img src={app.icon} alt={app.name} className="w-8 h-8" />
                <span className="mt-1 text-sm text-blue-600">{app.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CardMicrosoftOffice;
