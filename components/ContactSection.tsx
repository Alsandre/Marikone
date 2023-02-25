import React, { useState } from "react";
import { ContactSectionIcon } from "../icons";
import { StoreInfo } from "./StoreInfo";
import { TextInput } from "./TextInput";

const URL =
  "https://script.google.com/macros/s/AKfycbyWA81iY-k9_UAx78vEvaMEwJEtXcpJuiqr1lh3RmvRHauPZjP7XXpl7ReJPkMT5Ujo1w/exec";

export const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const params = {
    email,
    name,
    message,
  };

  async function sendEmail() {
    const response = await fetch(URL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "text/plain",
      },
      body: JSON.stringify(params),
    });

    const res = await response.json();
    if (res?.result?.contentLength > 0) {
      setName("");
      setEmail("");
      setMessage("");
    }
  }

  return (
    <div id='contact-form' className="flex flex-col items-center">
      <h1 className="text-dark-200 text-2xl italic font-extralight">Contact</h1>

      <div className="bg-section md:w-1/2 md:min-w-[768px] w-screen rounded-lg mt-8 flex md:flex-row justify-around flex-col-reverse py-12 md:px-14">
        <div className="flex md:border-r basis-[45%] bg-section md:bg-transparent border-dark-100 border-opacity-10 flex-col md:pr-12 md:items-start  mt-24 md:mt-0 md:w-fit">
          <StoreInfo
            title="Geo Fashion Lab"
            address="80 Zakaria Paliashvili St, Tbilisi"
            phone="+995 591 212 081"
          />

          <StoreInfo
            title="Comode"
            address="14 Irakli Abashidze St, Tbilisi"
            phone="+995 598 533 959"
          />
        </div>

        <div className="flex basis-[55%] pl-16 flex-col items-center justify-center">
          <TextInput
            label="Name"
            className="mb-8"
            onChange={(e: any) => setName(e.target.value)}
            value={name}
          />
          <TextInput
            label="Email"
            className="mb-8"
            onChange={(e: any) => setEmail(e.target.value)}
            value={email}
          />
          <TextInput
            label="Message"
            variant="textarea"
            className="mb-8"
            onChange={(e: any) => setMessage(e.target.value)}
            value={message}
          />

          <button
            className="w-32 h-12 bg-accent-200 rounded md:self-start self-center"
            onClick={sendEmail}
          >
            <h1 className="text-dark-200 text-lg">Submit</h1>
          </button>
        </div>
      </div>
    </div>
  );
};
