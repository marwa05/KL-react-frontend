import styled from "styled-components";

import useLanguage from "../../templates/language";

const Select = styled.select.attrs((props) => ({
  "data-testid": props["data-testid"] || "select"
}))`
  font-size: ${({ theme }) => theme.sizes.small};
  color: ${({ theme }) => theme.colors.secondary};
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
  appearance: none;
`;

const buildOptionList = (languageList, translate) => {
  const buildOption = (list, value) => {
    const { flag } = languageList[value];
    const dataTestId = `language-${value}`;
    const option = (
      <option key={value} value={value} data-testid={dataTestId}>
        {flag}
      </option>
    );
    list.push(option);
    return list;
  };

  const languageCodeList = Object.keys(languageList);
  const optionList = languageCodeList.reduce(buildOption, []);

  return optionList;
};

const Language = () => {
  const { language, setLanguage, translate, languageList } = useLanguage();

  const optionList = buildOptionList(languageList, translate);
  const onChange = (event) => setLanguage(event.target.value);

  return (
    <Select value={language} onChange={onChange} data-testid="language">
      {optionList}
    </Select>
  );
};

export default Language;
