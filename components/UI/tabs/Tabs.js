import { useState } from "react";
import ClientFields from "./ClientFields";
import AuditorsFields from "./AuditorsFields";
import ContactDetailForm from "./ContactDetailForm";

export default function Tab() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <>
      <div className="relative">
        <div className="flex absolute top-[-18px] left-0 right-0">
          <div
            className={`w-1/2 py-2 text-center cursor-pointer`}
            onClick={() => handleTabClick(1)}
            style={{
              backgroundColor: `${activeTab === 1 ? "#f1f1f1" : "#fff"}`,
              borderRadius: `${
                activeTab === 1 ? "15px 15px 0 0" : "0 0 15px 0"
              }`,
            }}
          >
            <button>
              <span
                className={`text-sm font-semibold ${
                  activeTab === 1 ? "tab-button" : ""
                }`}
              >
                Client
              </span>
            </button>
          </div>
          <div
            className="w-1/2 py-2 text-center cursor-pointer"
            onClick={() => handleTabClick(2)}
            style={{
              backgroundColor: `${activeTab === 2 ? "#f1f1f1" : "#fff"}`,
              borderRadius: `${
                activeTab === 2 ? "15px 15px 0 15px" : "15px 0 0 15px"
              }`,
            }}
          >
            <button className="text-sm font-semibold">
              <span
                className={`text-sm font-semibold ${
                  activeTab === 2 ? "tab-button" : ""
                }`}
              >
                Auditors
              </span>
            </button>
          </div>
        </div>

        <div className="tab-content pt-6">
          {activeTab === 1 && <AuditorsFields />}
          {activeTab === 2 && <ClientFields />}
        </div>
      </div>
    </>
  );
}
