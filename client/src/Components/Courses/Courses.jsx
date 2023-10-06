import React, { useState } from 'react'
import './Courses.css'
const Courses = () => {

  const [MainData, setMainData] = useState([])
  const [SelectedCategory, setSelectedCategory] = useState("All")

  const [selectedDifficulty, setSelectedDifficulty] = useState('')
  const [selectedSort, setSelectedSort] = useState('')
  const [isDifficultOpen, setIsDifficultOpen] = useState(false)
  const [isSortByOpen, setIsSortByOpen] = useState(false)
  const [isFilterOpen, setisFilterOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const data = [
    {

    }, 
    {

    },
    {

    },
    {

    }, 
    {

    },
    {

    },
  ]
  const [dropdownOption, setdropdownOption] = useState({
    "General Aptitude": false,
    "Programming": false,
    "Verbal": false,
    "Logical Reasoning": false,
  })

  const [selectedSubtopic, setSelectedSubtopic] = useState({
    "General Aptitude": '',
    "Programming": '',
    "Verbal": '',
    "Logical Reasoning": '',
  })

  const difficultyoptions = ["Easy", "Medium", "Hard"]
  const sotrtBy = ["A-Z", "Number"]
  const generalAptitudeSubtopics = [
    "Problems on Trains",
    "Time and Distance",
    "Height and Distance",
    "Time and Work",
    "Simple Interest",
    "Compound Interest"
  ];
  const programmingSubtopics = [
    "Declarations and Initializations",
    "Control Instructions",
    "Expressions",
    "Arrays",
    "Strings",
    "Pointers",
    "Bitwise Operators",
    "C Preprocessor",
    "Functions",
    "Structures, Unions, Enums",
    "Input / Output",
    "Command Line Arguments"
  ];
  const LogicalSubtopics = [
    "Essential Part",
    "Analogies",
    "Verbal Classification",
    "Letter and Symbol Series"
  ];

  return (
    <>
      <section>
        <div className="aptitude_Main">
          <h1 className='aptitude_heading'></h1>
          <div className="filter_container">
            <div className='search_div'>
              <input type="text" placeholder='Search Topics' className='searchbar' />
            </div>
            <div className="filter_input">
              <div className='dropdown'>
                <input type="text" placeholder='Difficulty' value={selectedDifficulty} readOnly />
                <i className={`bx bx-chevron-down ${isDifficultOpen ? 'ArrowRotate' : ''}`} id="inputArrow"></i>
                <div className={`dropdown-content ${isDifficultOpen ? 'show' : ''}`} id="difficultyMenu">
                  {
                    difficultyoptions.map((option, index) =>
                      <>
                        <a key={index}>{option}</a>
                      </>
                    )
                  }
                </div>
              </div>
              <div className='dropdown'>
                <input type="text" placeholder='Sort By' value={selectedSort} readOnly />
                <i className={`bx bx-chevron-down ${isSortByOpen ? 'ArrowRotate' : ''}`} id="inputArrow"></i>
                <div className={`dropdown-content ${isSortByOpen ? 'show' : ''}`} id="difficultyMenu">
                  {
                    sotrtBy.map((option, index) =>
                      <>
                        <a key={index}>{option}</a>
                      </>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="aptitude_container">
            <div className="sideBar_container">
              <div className="category_container">
                <h3 className='category_heading'>Category</h3>
                <ul className='category_ul'>
                  <li className='category_li'>Vocational Training</li>
                  <li className='category_li'>Finacial Management<i className={`bx bx-chevron-down ${dropdownOption["General Aptitude"] ? 'ArrowRotate' : ''}`} id="inputArrow"></i></li>
                  <li className='category_li' >Mental Health<i className={`bx bx-chevron-down ${dropdownOption["Programming"] ? 'ArrowRotate' : ''}`} id="inputArrow"></i></li>
                  <li className='category_li' >Spritual Content<i className={`bx bx-chevron-down ${dropdownOption["Verbal"] ? 'ArrowRotate' : ''}`} id="inputArrow"></i></li>
                  <li className='category_li' >Legal education<i className={`bx bx-chevron-down ${dropdownOption["Logical Reasoning"] ? 'ArrowRotate' : ''}`} id="inputArrow"></i></li>
                  <li className='category_li' >Civic education<i className={`bx bx-chevron-down ${dropdownOption["Logical Reasoning"] ? 'ArrowRotate' : ''}`} id="inputArrow"></i></li>
                  <li className='category_li' >Family and RelationShip<i className={`bx bx-chevron-down ${dropdownOption["Logical Reasoning"] ? 'ArrowRotate' : ''}`} id="inputArrow"></i></li>
                </ul>
              </div>
            </div>

            <div className='filter'>
              <button onClick={()=> setisFilterOpen(!isFilterOpen)}><i className='bx bx-menu-alt-right'></i></button>
            </div>
            {

              <div className={`filter-section ${isFilterOpen ? 'open' : ''}`}>
                <div className="mobile_category_container">
                  <div className='mobile_heading_grid'>
                    <h3 className='category_heading'>Category</h3>
                    <img src="/static/media/close.6f8b0621c325d307e9d486f8740d96b4.svg" alt="" width="25"></img>
                  </div>
                  <ul className='category_ul'>
                    <li className='category_li' >ALL</li>
                    <li className='category_li' >General Aptitude <i className={`bx bx-chevron-down ${dropdownOption["General Aptitude"] ? 'ArrowRotate' : ''}`} id="inputArrow"></i></li>
                    <li className='category_li'>Programming <i className={`bx bx-chevron-down ${dropdownOption["Programming"] ? 'ArrowRotate' : ''}`} id="inputArrow"></i></li>
                    <li className='category_li' >Verbal  <i className={`bx bx-chevron-down ${dropdownOption["Verbal"] ? 'ArrowRotate' : ''}`} id="inputArrow"></i></li>
                    <li className='category_li' >Logical Reasoning  <i className={`bx bx-chevron-down ${dropdownOption["Logical Reasoning"] ? 'ArrowRotate' : ''}`} id="inputArrow"></i></li>
                  </ul>
                </div>
              </div>

            }
            <div className="problem_container">
              <div className="headline_problem_container">
                
              </div>
              <div className='problem_heading'></div>
              {
                isLoading ?
                  <div className='loader_container'>
                    <span className="loader"></span>
                  </div>
                  :
                  <div className='problem_main'>
                    {
                      data.map((data) =>
                      <div className="CoursesList_card">
                        <div className="Courses_card_img">
                          <img src="course1.jpg" alt="Course 1" />
                        </div>
                        <div className="Courses_card_content">
                          <div className="Courses_card_title">Course Title 1</div>
                          <div className="Courses_card_description">
                            This course covers various topics in web development and programming, providing valuable skills for the future.
                          </div>
                          <div className='Courses_card_rating'>4.8</div>
                        </div>
                      </div>
                    )
                    }
                  </div>
              }
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Courses