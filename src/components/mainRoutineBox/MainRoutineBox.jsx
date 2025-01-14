import React from "react";
import * as S from "./styled";
import plusButton from "../../assets/plusButton.svg";
function MainRoutineBox({
  id,
  src,
  title,
  subtitle,
  content,
  onPlusButtonClick,
}) {
  const handleClick = () => {
    if (onPlusButtonClick) {
      onPlusButtonClick(id);
    }
  };

  const contentArray = content.split("-");
  contentArray.shift();
  return (
    <S.BoxContainer>
      <S.RoutineBoxImg src={src} alt={title} />

      <S.TitleContainer>
        <S.MainTitleContainer>
          <S.MainTitle>{title}</S.MainTitle>
          <img
            src={plusButton}
            alt="Plus Button"
            style={{ width: "24px", height: "24px" }}
            onClick={handleClick}
          />
        </S.MainTitleContainer>
        <S.SubTitle>{subtitle}</S.SubTitle>
      </S.TitleContainer>
      <S.BoxContent>
        {contentArray.map((line, index) => (
          <div key={index}>‣ {line.trim()}</div>
        ))}
      </S.BoxContent>
    </S.BoxContainer>
  );
}
export default MainRoutineBox;
