import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { getSearchContent } from "@/apis/search";
import { Header } from "../../components/common/Header/Header";
import { useParams, useNavigate } from "react-router-dom";
import { SearchResultStar } from "@/components/MyStar/SearchResultStar";
const SubCategoryPage = () => {
  const { section, subCategory } = useParams();
  console.log("useParams로 불러온 get할 data", subCategory);
  const [searchData, setSearchData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getSearchContent(subCategory);
        console.log("서브카테고리P에서 불러온 값", res.data);
        setSearchData(res.data);
      } catch (err) {
        console.error("Error:", err);
      }
    };

    fetchData();
  }, [subCategory]);

  if (!searchData) {
    return <div>Loading...</div>;
  }

  const { 인물 } = searchData;
  console.log(인물);

  const moveOnSearch = () => {
    navigate("/search");
  };

  const moveOnStarP = (id) => {
    navigate(`/star/${id}`);
  };
  return (
    <S.Layout>
      <Header $margin={"1rem 0 0 0"} $padding={"1rem 1rem 0 1rem"}>
        <div onClick={moveOnSearch}> {`${section} / ${subCategory}`}</div>
      </Header>
      <S.Container>
        {인물 ? (
          <S.CategoryWrapper>
            {인물.map((item) => (
              <SearchResultStar
                key={item.id}
                id={item.url}
                src={item.image}
                name={item.title}
                profession={item.profession}
                type={인물}
                onClick={() => moveOnStarP(item.url)}
              />
            ))}
          </S.CategoryWrapper>
        ) : (
          <div>Loading...</div>
        )}
      </S.Container>
    </S.Layout>
  );
};

export default SubCategoryPage;
