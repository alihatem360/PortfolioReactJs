import React from "react";

import Dropdown from "react-bootstrap/Dropdown";
import { useTranslation } from "react-i18next";
function LnaguageMenu() {
  const { t, i18n } = useTranslation();
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        {i18n.language === "en" ? "English" : "العربية"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {i18n.language === "en" ? (
          <Dropdown.Item onClick={() => i18n.changeLanguage("ar")}>
            {t("language.arabic")}
          </Dropdown.Item>
        ) : (
          <Dropdown.Item onClick={() => i18n.changeLanguage("en")}>
            {t("language.english")}
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LnaguageMenu;
