import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SideBarData } from "../data/sidebardata";
import "./SideBarMenuData.css";
import { YearData } from "../data/yeardata";
import { GenerData } from "../data/generdata";
import { LanguageData } from "../data/languagedata";

const SidebarLink = styled.span`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10px 30px 10px;
  list-style: none;
  height: 70px;
  font-size: 20px;
  text-transform: uppercase;
  margin-top: -9px;

  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const DropdownContainer = styled.div`
  // max-height: 164px;
  //   overflow-y: auto; /* add vertical scrolling */
`;

const SidebarLabel = styled.span`
  float: float;
`;

const SidebarIcon = styled.span`
  float: right;
`;

const SidebarImage = styled.img`
  width: 45px;
`;

const Dropdown = styled.span`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`;

const SideBarMenuData = (props) => {

  //setYear={props.setYear} SetChange={props.SetChange} change={props.change}

  const [icon, setIcon] = useState(false);

  const showIcon = () => {
    setIcon(!icon);
  };

  const [hoverTitle, setHoverTitle] = useState(false);
  const [tempIndex, setTempIndex] = useState(100);


  const getYear = (year) => {
    props.SetChange(!props.change)
    props.setYear(year)
  }

  const getLanguage = (language) => {
    props.SetChange(!props.change)
    props.setLanguage(language)
  }

  const getGener = (gener) => {
    props.SetChange(!props.change)
    props.setGener(gener)
  }

  const unSetMouse = (index) => {
    setHoverTitle(false);
    setTempIndex(index);
  };

  const setMouse = (index) => {
    setHoverTitle(true);
    setTempIndex(index);
    let str2 = document.getElementById(index);
    //console.log(str2);
  };

  useEffect(() => {
    if (icon && hoverTitle) {
      let str = document.getElementById(tempIndex);
      str.classList.add("addHover");
    } else {
      if (tempIndex != 100) {
        let str = document.getElementById(tempIndex);
        str.classList.remove("addHover");
        setTempIndex(100);
      }
    }
  }, [hoverTitle]);

  return (
    <>
      {/* <SidebarLink style={{ overflowY: 'auto' }}> */}
      <SidebarLink
        id={props.index}
        onClick={(e) => {
          showIcon();
        }}
      >
        <div className="col">
          <SidebarImage src={props.item.image} />
        </div>
        <div className="col">
          <SidebarLabel>
            {props.item.title}
          </SidebarLabel>
        </div>
        <div className="col">
          {icon ? (
            <SidebarIcon>{props.item.iconeOpened}</SidebarIcon>
          ) : (
            <SidebarIcon>{props.item.iconeClosed}</SidebarIcon>
          )}
        </div>
      </SidebarLink>

      {icon && props.item.title === "Year" && (
        <DropdownContainer
          onMouseLeave={(e) => unSetMouse(props.index)}
          onMouseEnter={(e) => setMouse(props.index)}
        >
          {YearData.map((subitem, index) => {
            return (
              <Dropdown key={index} onClick={(e) => getYear(subitem.year)}>
                <SidebarLabel>{subitem.year}</SidebarLabel>
              </Dropdown>
            );
          })}
        </DropdownContainer>
      )}
     
      {icon && props.item.title === "Gener" && (
        <DropdownContainer
          onMouseLeave={(e) => unSetMouse(props.index)}
          onMouseEnter={(e) => setMouse(props.index)}
        >
          {GenerData.map((subitem, index) => {
            return (
              <Dropdown key={index} onClick={(e) => getGener(subitem.gener)}>
                <SidebarLabel>{subitem.gener}</SidebarLabel>
              </Dropdown>
            );
          })}
        </DropdownContainer>
      )}

      {icon && props.item.title === "Language" && (
        <DropdownContainer
          onMouseLeave={(e) => unSetMouse(props.index)}
          onMouseEnter={(e) => setMouse(props.index)}
        >
          {LanguageData.map((subitem, index) => {
            return (
              <Dropdown key={index} onClick={(e) => getLanguage(subitem.language)}>
                <SidebarLabel>{subitem.Language}</SidebarLabel>
              </Dropdown>
            );
          })}
        </DropdownContainer>
      )}
    </>
  );
};

export default SideBarMenuData;
