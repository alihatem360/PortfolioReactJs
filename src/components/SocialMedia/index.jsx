import React from "react";
import { useEffect, useState } from "react";
import SocialData from "../../data/projects";
import GetAllData from "../../data/projects";
const SocialMedia = () => {
  const { getProjects, getSocials, getAboutme } = GetAllData();

  const [socialsData, setSocialsData] = useState([]);
  useEffect(() => {
    getSocials().then((data) => {
      setSocialsData(data[0]);
    });
  }, []);

  const mySocials = [
    "github",
    "linkedin",
    "youtube",
    "whatsapp",
    "email",
    "twitter",
    "facebook",
  ];

  return (
    <React.Fragment>
      <ul className="list-unstyled">
        {socialsData.map((social) => {
          if (mySocials.includes(social.name)) {
            return (
              <li key={social.id}>
                {social.name === "email" ? (
                  <a href={`${social.link}`} target="_blank" rel="noreferrer">
                    <i class="fa-solid fa-at"></i>
                  </a>
                ) : (
                  <a href={social.link} target="_blank" rel="noreferrer">
                    <i
                      class={`fa-brands
                          fa-${social.name}`}
                    ></i>
                  </a>
                )}
              </li>
            );
          }
        })}
      </ul>
    </React.Fragment>
  );
};

export default SocialMedia;
