document.addEventListener("DOMContentLoaded", () => {
  let i = 0;
  createModuleElements(i);
  const asideContainer = document.querySelector(".aside .container");

  if (typeof asideitems !== "undefined" && asideitems.length > 0) {
    asideitems.forEach(item => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "container-item" + " " + item.class;

      const iconSpan = document.createElement("span");
      iconSpan.className = "item-icon";
      const icon = document.createElement("i");
      icon.className = item.itemIcon;
      icon.setAttribute("aria-hidden", "true");
      iconSpan.appendChild(icon);

      const textSpan = document.createElement("span");
      textSpan.className = "item";
      textSpan.textContent = item.itemName;

      itemDiv.appendChild(iconSpan);
      itemDiv.appendChild(textSpan);

      asideContainer.appendChild(itemDiv);
    });
  }

  const containerItemElements = document.querySelectorAll(".container-item");

  containerItemElements.forEach(item => {
    item.addEventListener('click', () => {
      const activeElement = document.querySelector('.container-item.active');
      if (activeElement) {
        activeElement.classList.remove('active');
      }
      item.classList.add('active');
    });
  });

  let moduleCSS = document.querySelector(".learn");
  if (moduleCSS) {
    moduleCSS.addEventListener("click", () => {
      const moduleContainerEle = document.querySelector(".module-container");
      if (moduleContainerEle) {
        moduleContainerEle.style.display = "block";
        moduleContainerEle.style.visibility = "visible";
      } else {
        console.log("Element with class '.module-container' not found.");
      }
    });
  } else {
    console.log("Element with class '.learn' not found.");
  }
});

function createChapterList(moduleEle, chapterContainerItems,lessonContainerEle) {
  if (!chapterContainerItems) {
    console.log("chapter container element not found");
    return;
  }

  if (typeof moduleEle !== "undefined" && moduleEle.length > 0) {
    moduleEle.forEach(ele => {
      let chapterItemEle = document.createElement("div");
      chapterItemEle.classList.add("chapter-item");
      chapterContainerItems.appendChild(chapterItemEle);

      let chapterInfoEle = document.createElement("div");
      chapterInfoEle.classList.add("chapter-info");
      chapterItemEle.appendChild(chapterInfoEle);

      let chapterNoEle = document.createElement("div");
      chapterNoEle.classList.add("chapter-no");
      chapterNoEle.innerText = "Chapter " + ele.chapterNo;
      chapterInfoEle.appendChild(chapterNoEle);

      let chapterNameEle = document.createElement("div");
      chapterNameEle.classList.add("chapter-name");
      chapterNameEle.innerText = ele.chapterName;
      chapterInfoEle.appendChild(chapterNameEle);

      let arrowEle = document.createElement("div");
      arrowEle.classList.add("arrow");
      chapterItemEle.appendChild(arrowEle);

      let imageEle = document.createElement("img");
      imageEle.setAttribute("src", "images/arrow/next.png");
      arrowEle.appendChild(imageEle);

    if(ele.lesson && ele.lesson.length >0)
      {
        let lessonInnerContainerEle = document.createElement("div");
        lessonInnerContainerEle.classList.add("lesson-inner-container");
        lessonContainerEle.appendChild(lessonInnerContainerEle);

        let lessonTitleEle = document.createElement("div");
        lessonTitleEle.classList.add("lesson-title");
        lessonTitleEle.innerText = "Lessons"
        lessonInnerContainerEle.appendChild(lessonTitleEle);
        ele.lesson.forEach(lessonItem =>{
          let lessonContainerInfoEle = document.createElement("div");
          lessonContainerInfoEle.classList.add("lesson-container-info");
          lessonInnerContainerEle.appendChild(lessonContainerInfoEle);

          let lessonInfoSectionEle = document.createElement("div");
          lessonInfoSectionEle.classList.add("lesson-info-section");
          lessonContainerInfoEle.appendChild(lessonInfoSectionEle);

          let iconSpanElement = document.createElement("span");
          iconSpanElement.classList.add("icon-span");
          lessonInfoSectionEle.appendChild(iconSpanElement);

          let iEle = document.createElement("i");
          iEle.className = lessonItem.icon;
          iEle.setAttribute("aria-hidden",true);
          iconSpanElement.appendChild(iEle);

          let lessonInfoEle = document.createElement("span");
          lessonInfoEle.classList.add("lesson-info");
          lessonInfoSectionEle.appendChild(lessonInfoEle);

          let lessonheadingEle = document.createElement("span");
          lessonheadingEle.classList.add("lesson-heading");
          lessonheadingEle.innerText = lessonItem.lessonHeading;
          lessonInfoEle.appendChild(lessonheadingEle);

          let lessonLangEle = document.createElement("span");
          lessonLangEle.classList.add("lesson-lang");
          lessonLangEle.innerText = lessonItem.lessonLang;
          lessonInfoEle.appendChild(lessonLangEle);

          let lessonStatusContainerEle = document.createElement("div");
          lessonStatusContainerEle.classList.add("lesson-status-container");
          lessonContainerInfoEle.appendChild(lessonStatusContainerEle);

          let lessonstatusEle = document.createElement("div");
          lessonstatusEle.className = lessonItem.status;
          lessonStatusContainerEle.appendChild(lessonstatusEle);

          let lessonStatusInfoEle = document.createElement("span");
          lessonStatusInfoEle.classList.add("lesson-status-info-ele");
          lessonStatusInfoEle.innerText = lessonItem.status+"!";
          lessonstatusEle.appendChild(lessonStatusInfoEle);

          let lessonStatusIconEle = document.createElement("i");
          lessonStatusIconEle.setAttribute("aria-hidden","true");
          lessonStatusIconEle.className = lessonItem.statusIcon;
          lessonstatusEle.appendChild(lessonStatusIconEle);

          lessonInfoSectionEle.addEventListener("click",()=>{
            window.location.href = "newPage/newPage.html";
          })
        })
        chapterItemEle.addEventListener("click", () => {
          const activeLessonContainer = document.querySelector(".lesson-inner-container.active");
          if (activeLessonContainer && activeLessonContainer !== lessonInnerContainerEle) {
            activeLessonContainer.classList.remove("active");
            activeLessonContainer.style.display = "none";
            if (previousChapterItemEle) {
              previousChapterItemEle.classList.remove("js-chapter-item");
            }
          }
          
  
          if (lessonInnerContainerEle.classList.contains("active")) {
            lessonInnerContainerEle.classList.remove("active");
            lessonInnerContainerEle.style.display = "none";
            chapterItemEle.classList.remove("js-chapter-item");
          } else {
            
            lessonInnerContainerEle.classList.add("active");
            lessonInnerContainerEle.style.display = "block";
            chapterItemEle.classList.add("js-chapter-item");
          }

          previousChapterItemEle = chapterItemEle;
        });

        
      }
      
    });
  } else {
    console.log("chapter element is not defined or empty");
  }
}

function createModuleElements(i) {
  let moduleContainerEle = document.querySelector(".module-container");

  if (!moduleContainerEle) {
    console.log("Module container element not found.");
    return;
  }

  if (typeof moduleElements !== "undefined" && moduleElements.length > 0) {
    moduleElements.forEach(ele => {
      let moduleContainerInfoEle = document.createElement("div");
      moduleContainerInfoEle.classList.add("module-container-info");
      moduleContainerEle.appendChild(moduleContainerInfoEle);

      let moduleInfoEle = document.createElement("div");
      moduleInfoEle.classList.add("module-info");
      moduleContainerInfoEle.appendChild(moduleInfoEle);

      let moduleIconEle = document.createElement("div");
      moduleIconEle.classList.add("module-icon");
      moduleInfoEle.appendChild(moduleIconEle);

      let moduleImgEle = document.createElement("img");
      moduleImgEle.setAttribute("src", ele.image);
      moduleIconEle.appendChild(moduleImgEle);

      let infoEle = document.createElement("div");
      infoEle.classList.add("info");
      moduleInfoEle.appendChild(infoEle);

      let infoInfoEle = document.createElement("div");
      infoInfoEle.classList.add("info-info");
      infoEle.appendChild(infoInfoEle);

      let moduleHeadingEle = document.createElement("div");
      moduleHeadingEle.classList.add("module-heading");
      moduleHeadingEle.innerText = ele.moduleHeading;
      infoInfoEle.appendChild(moduleHeadingEle);

      let mainModuleHeadingEle = document.createElement("div");
      mainModuleHeadingEle.classList.add("main-module-heading");
      mainModuleHeadingEle.innerText = "Tech101:Starting in Tech";
      infoInfoEle.appendChild(mainModuleHeadingEle);

      let timeModuleInfoEle = document.createElement("div");
      timeModuleInfoEle.classList.add("time-module-info");
      infoInfoEle.appendChild(timeModuleInfoEle);

      let lessonSpanEle = document.createElement("span");
      lessonSpanEle.innerText = ele.timeModule.lessons;
      timeModuleInfoEle.appendChild(lessonSpanEle);

      let bulletSpanEle = document.createElement("span");
      bulletSpanEle.classList.add("bullet");
      bulletSpanEle.innerText = "•";
      timeModuleInfoEle.appendChild(bulletSpanEle);

      let weekSpanEle = document.createElement("span");
      weekSpanEle.innerText = ele.timeModule.weeks;
      timeModuleInfoEle.appendChild(weekSpanEle);

      let bullet2SpanEle = document.createElement("span");
      bullet2SpanEle.classList.add("bullet");
      bullet2SpanEle.innerText = "•";
      timeModuleInfoEle.appendChild(bullet2SpanEle);

      let creditSpanEle = document.createElement("span");
      creditSpanEle.innerText = ele.timeModule.credits;
      timeModuleInfoEle.appendChild(creditSpanEle);

      let gradeInfoEle = document.createElement("div");
      gradeInfoEle.classList.add("grade-info");
      infoEle.appendChild(gradeInfoEle);

      let gradeHeadingEle = document.createElement("div");
      gradeHeadingEle.classList.add("percent-heading");
      gradeHeadingEle.innerText = ele.gradeHeading;
      gradeInfoEle.appendChild(gradeHeadingEle);

      let gradePercentInfoEle = document.createElement("div");
      gradePercentInfoEle.classList.add("time-module-info");
      gradePercentInfoEle.innerText = ele.gradePercent;
      gradeInfoEle.appendChild(gradePercentInfoEle);

      let progressInfoEle = document.createElement("div");
      progressInfoEle.classList.add("progress-info");
      moduleContainerInfoEle.appendChild(progressInfoEle);

      let percentHeading = document.createElement("div");
      percentHeading.classList.add("percent-heading");
      percentHeading.innerText = "Progress";
      progressInfoEle.appendChild(percentHeading);

      let progressContainerEle = document.createElement("div");
      progressContainerEle.classList.add("progress-container");
      progressInfoEle.appendChild(progressContainerEle);

      let progressEle = document.createElement("div");
      progressEle.classList.add("progress");
      progressContainerEle.appendChild(progressEle);

      let percentEle = document.createElement("div");
      percentEle.classList.add("percent");
      percentEle.innerText = ele.percent;
      progressEle.appendChild(percentEle);

      let progressBarEle = document.createElement("div");
      progressBarEle.classList.add("progress-bar");
      progressEle.appendChild(progressBarEle);

      let progressInEle = document.createElement("div");
      progressInEle.classList.add("progress-in");
      progressInEle.setAttribute("style", `width: ${ele.percent}`);
      progressBarEle.appendChild(progressInEle);

      let closedTagEle = document.createElement("div");
      closedTagEle.classList.add("closed-tag");
      progressContainerEle.appendChild(closedTagEle);

      let closedTagImgEle = document.createElement("img");
      closedTagImgEle.setAttribute("src", "images/arrow/downside.png");
      closedTagEle.appendChild(closedTagImgEle);

      let j = i + 1;
      if (i <= chapterList.length) {
        let chapterContainerEle = document.createElement("div");
        chapterContainerEle.classList.add("chapter-container");
        moduleContainerEle.appendChild(chapterContainerEle);

        let chapterContainerStartEle = document.createElement("div");
        chapterContainerStartEle.classList.add("chapter-container-start");
        chapterContainerEle.appendChild(chapterContainerStartEle);

        let chapterContainerItemsEle = document.createElement("div");
        chapterContainerItemsEle.classList.add("chapter-container-items");
        chapterContainerStartEle.appendChild(chapterContainerItemsEle);

        let lessonContainerEle = document.createElement("div");
        lessonContainerEle.classList.add("lesson-container");
        chapterContainerStartEle.appendChild(lessonContainerEle);

        let capstoneConatinerEle = document.createElement("div");
        capstoneConatinerEle.classList.add("capstone-container");
        chapterContainerEle.appendChild(capstoneConatinerEle);
        
        let imageContainerEle = document.createElement("div");
        imageContainerEle.classList.add("image-container");
        capstoneConatinerEle.appendChild(imageContainerEle);

        let imageItemEle = document.createElement("img");
        imageItemEle.classList.add("image-item");
        imageItemEle.setAttribute("src","images/capstoneimage.png");
        imageContainerEle.appendChild(imageItemEle);

        let capstoneMainContainer = document.createElement("div");
        capstoneMainContainer.classList.add("capstone-main-container");
        capstoneConatinerEle.appendChild(capstoneMainContainer);
        
        let capstoneHeaderContainerEle = document.createElement("div");
        capstoneHeaderContainerEle.classList.add("capstone-header-container");
        capstoneMainContainer.appendChild(capstoneHeaderContainerEle);

        let capstoneHeadingEle = document.createElement("div");
        capstoneHeadingEle.classList.add("capstone-heading");
        capstoneHeaderContainerEle.appendChild(capstoneHeadingEle);

        let capstoneTitleEle = document.createElement("span");
        capstoneTitleEle.classList.add("capstone-title");
        capstoneTitleEle.innerText = "Capstone Project";
        capstoneHeadingEle.appendChild(capstoneTitleEle);

        let capstoneIconEle = document.createElement("i");
        capstoneIconEle.className="fa fa-info-circle";
        capstoneIconEle.setAttribute("aria-hidden","true");
        capstoneHeadingEle.appendChild(capstoneIconEle);

        let capstoneGuidelineEle = document.createElement("div");
        capstoneGuidelineEle.classList.add("capstone-guideline");
        capstoneGuidelineEle.innerText= "View Guidelines";
        capstoneHeaderContainerEle.appendChild(capstoneGuidelineEle);

        let capstoneInfoEle = document.createElement("div");
        capstoneInfoEle.classList.add("capstone-info");
        capstoneMainContainer.appendChild(capstoneInfoEle);

        let capstoneInfoHeadingEle = document.createElement("div");
        capstoneInfoHeadingEle.classList.add("capstone-info-heading");
        capstoneInfoHeadingEle.innerText = "Average & Silicon valley";
        capstoneInfoEle.appendChild(capstoneInfoHeadingEle);

        let capstoneInfoDetailsEle = document.createElement("div");
        capstoneInfoDetailsEle.classList.add("capstone-info-details");
        capstoneInfoEle.appendChild(capstoneInfoDetailsEle);

        let capstoneInfoContentEle = document.createElement("div");
        capstoneInfoContentEle.classList.add("capstone-info-content");
        capstoneInfoContentEle.innerText = "Avengers: Harness Python to conquer challenges in this Silicon Valley-inspired project. Learn Python and machine learning as you emerge as a tech hero!"
        capstoneInfoDetailsEle.appendChild(capstoneInfoContentEle);

        let capstoneContentNextEle = document.createElement("i");
        capstoneContentNextEle.className = "fa fa-arrow-right";
        capstoneContentNextEle.setAttribute("aria-hidden","true");
        capstoneInfoDetailsEle.appendChild(capstoneContentNextEle);

        createChapterList(chapterList[0][j], chapterContainerItemsEle,lessonContainerEle);
        i++;
      }

      moduleContainerInfoEle.addEventListener("click", () => {
        const activeElement = document.querySelector(".module-container-info.active");
        const isActive = moduleContainerInfoEle.classList.contains("active");

        if (activeElement && activeElement !== moduleContainerInfoEle) {
          activeElement.classList.remove("active");
          activeElement.nextElementSibling.style.display = "none";
        }

        if (isActive) {
          moduleContainerInfoEle.classList.remove("active");
          moduleContainerInfoEle.nextElementSibling.style.display = "none";
        } else {
          moduleContainerInfoEle.classList.add("active");
          moduleContainerInfoEle.nextElementSibling.style.display = "block";
        }
      });
    });
  } else {
    console.log("moduleElements is not defined or empty.");
  }
}
