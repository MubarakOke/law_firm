import { useState, useEffect } from "react";
import './App.css';
import phoneIcon from './assets/Phone.png'
import logo from './assets/logo.png'
import award1 from './assets/award1.png'
import award2 from './assets/award2.png'
import award3 from './assets/award3.png'
import award4 from './assets/award4.png'
import award5 from './assets/award5.png'
import award6 from './assets/award6.png'
import award7 from './assets/award7.png'
import downButton from './assets/down.png'
import leftButton from './assets/leftButton.png'
import rightButton from './assets/rightButton.png'
import storyCard from './assets/story-min.jpg'
import team from './assets/team-min.jpg'
import AchievementCard from './components/achievementCard';

let achievementContent= [{value:"47.4M +", info: "Awarded to shooting victims"},
                           {value:"980K +", info: "Homeless person hit by a taxi"},
                           {value:"790K +", info: "Auto accident victim hit by a DUI driver "},
                           {value:"330K +", info: "Pedestrian attacked by a dog"}]
      
let reviewContent= [{id:0, name:"David", review: "Going through a divorce was one of the hardest things I've ever had to do, but Morgan & Associates helped me through it. My family law attorney provided expert guidance and representation, and I was able to achieve a fair and equitable settlement."},
                    {id:1, name:"Maria", review: "I was drowning in debt, and I didn't know where to turn. But Morgan & Associates helped me file for bankruptcy, and it was like a weight was lifted off my shoulders. I can finally start rebuilding my financial future."},
                    {id:2, name:"John", review: "When I was facing criminal charges, I thought my life was over. But Morgan & Associates fought for me every step of the way, and thanks to their hard work, I was acquitted of all charges."},
                    {id:3, name:"Rachel", review: "I was living in fear of being deported, but Morgan & Associates helped me obtain legal status. Their immigration attorneys built a strong case for me, and I can finally breathe easy knowing that I can continue living and working in the United States."},
                    {id:4, name:"Sarah", review: "As a business owner, I was facing legal issues that threatened to shut down my company. But Morgan & Associates helped me navigate the complex legal landscape, and thanks to their expertise, I was able to continue operating my business without legal complications"}
                  ]

function App() {
  const [review, setReview] = useState(reviewContent[0])
  const [dropDown, setDropDown] = useState("")
  const [dropDownState, setDropDownState] = useState(0)

  const continuosScroll= ()=>{
    if (review.id===0){
      setReview(reviewContent[4])
    }
    else{
      setReview(reviewContent[review.id-1])
    }
  }

  const toggleDropDown= ()=>{
    if (dropDownState === 0){
      setDropDownState(1)
    }
    else{
      setDropDownState(0)
    }
  }

  useEffect(()=>{
    const intervalID = setInterval(continuosScroll, 3000)

    return () => clearInterval(intervalID)
  },)

  const renderAchievementCard= ()=>{
    return achievementContent.map((item, index)=>{
      return <div className="mr-[42px]"><AchievementCard key={index} value={item.value} info={item.info} /></div>
    })
  }

  const handleLeftReviewButoonClick= (e)=>{
    e.preventDefault()
    if (review.id===0){
      setReview(reviewContent[4])
    }
    else{
      setReview(reviewContent[review.id-1])
    }
  }

  const handleRightReviewButoonClick= (e)=>{
    e.preventDefault()
    if (review.id===4){
      setReview(reviewContent[0])
    }
    else{
      setReview(reviewContent[review.id+1])
    }
  }

  return (
    <div className="font-['Lato'] text-[16px]">
      <div className="flex justify-end ] items-center text-white contact-info h-[75px] bg-[#004AAD] px-[100px]">
        <div className="flex items-center">
          <div className="pr-[16px] border-r-2">SERVING THE STATES SINCE 1998</div>
          <div className="flex items-center pl-[16px]">
            <img src={phoneIcon} alt="phone"/>
            <div className="ml-[11px]">(000) - 111 - 1111</div>
          </div>
          <a className="text-[14px] px-[32px] py-[12px] border-2 rounded-[5px] bg-white text-[#004AAD] border-white ml-[33px]" href="0001111111" target="_blank" rel="noreferrer">CALL NOW</a>
        </div>
      </div>

      <div id="home" className="h-[800px] bg-cover hero">
        <div className="hero-nav h-[65px] flex justify-between items-center px-[100px]">
          <img className="h-[60px]" src={logo} alt="logo"/>
          <div className="flex text-white">
            <a href="#home" className="py-[8px] mr-[21px] border-b border-white">HOME</a>
            <a href="#firm" className="py-[8px] mr-[21px]">OUR FIRM</a>
            <a href="#practice" className="py-[8px] mr-[21px]">PRACTICE AREAS</a>
            <a href="#review" className="py-[8px] mr-[21px]">CLIENT REVIEWS</a>
            <a href="#contact" className="py-[8px]">CONTACT US</a>
          </div>
        </div>
        <div className="flex justify-center text-white">
          <div className="flex flex-col items-center">
            <div className="text-[25px] mt-[80px] mb-[35px]">SINCE 1998</div>
            <div className="text-[45px] py-[19px] px-[200px] border-y border-white mb-[35px]">MORGAN AND ASSOCIATES LAW FIRM</div>
            <div className="text-[25px] font-thin mb-[80px]">We are thorough, steadfast, and rigorous – every case, every client, every single time. </div>
            <a href="#contact" className="text-[16px] py-[20px] px-[25px] hover:bg-[#155FC3] bg-[#004AAD] rounded-[8px]">GET A FREE CONSULTATION TODAY</a>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-center mt-[-100px]">
          {renderAchievementCard()}
        </div>
        <div className="text-center text-[15px] text-['PT Serif'] mt-[27px] italic">The case results contained herein are illustrative of some of the results we have obtained for our clients. Individual case results will vary depending upon the details of each case. </div>
      </div>

      <div className="about mt-[60px] flex justify-center">
        <div className="flex flex-col items-center">
          <div className="text-['PT Serif] text-[22px] text-[#155FC3]">About</div>
          <div className="mt-[10px] text-[40px] font-bold">THE MORGAN AND ASSOCIATES LAW FIRM</div>
          <div id="firm" className="mt-[10px] w-[75px] border-2 border-[#155FC3]"></div>
          <div className="mt-[25px] text-[22px] italic">When it comes to handling your case, experience counts.</div>
        </div>
      </div>

      <div className="h-[213px] px-[90px] py-[60px] flex justify-between recognition mt-[35px]">
        <img src={award1} alt="award1" />
        <img src={award2} alt="award2" />
        <img src={award3} alt="award3" />
        <img src={award4} alt="award4" />
        <img src={award5} alt="award5" />
        <img src={award6} alt="award6" />
        <img src={award7} alt="award7" />
      </div>

      <div className="story flex pl-[82px] mt-[80px]">
        <div className="w-[600px] mr-[100px]">
          <div className="text-[35px] font-bold text-['PT Serif']">Our Story</div>
          <div className="mt-[25px] text-[20px]">
          Our law firm has a reputation for excellence in handling even the most complex legal cases. One of our early successes was an immigration case involving a young man seeking asylum. Despite the challenges, we fought tirelessly for our client's rights, and ultimately achieved a successful outcome. Since then, our firm has become known for our dedication to clients, no matter how difficult the case may be
          </div>
        </div>
        <div>
          <div className="mt-[60px] flex storycard text-white">
            <img className="mt-[-90px] ml-[40px] h-[490px] w-[680px]" src={storyCard} alt="storyCard"/>
            <div className="ml-[60px] mt-[47px]">
              <div className="text-[25px] font-bold text-['PT Serif']">Wesley B. Morgan</div>
              <div className="text-[20px] w-[400px] mr-[35px] mt-[20px]">Since establishing the law firm in 1998, Wesley B. Morgan has committed himself to providing the best possible legal representation to his clients. </div>
              <div className="text-[20px] w-[400px] mr-[35px] mt-[40px] mb-[70px]">Since its inception, The Morgan and Associates Law Firm has and continues to follow a simple, time-tested principle – “Take Care of People.”</div>
            </div>
          </div>
        </div>
      </div>

      <div className='mission relative mt-[157px]'>
        <div className="px-[40px] py-[22px] absolute left-[62px] top-[-60px]  inline-block text-['PT Serif'] bg-[#155FC3] text-[30px] font-bold text-white">Our Mission</div>
        <div className="service-bg h-[660px] bg-cover pt-[5px]">
          <div className="w-[82%] mx-auto mt-[95px] bg-white p-[55px]">
            <div className="text-[23px] w-[72%] mx-auto text-center">Morgan & Associates is a highly reputable law firm known for its expertise in complex legal cases. Our dedication to excellence is demonstrated by the success we've achieved for our clients, including a family seeking asylum in the United States.</div>
            <div className="mt-[35px]  w-[72%] mx-auto text-center text-[23px]">With attorneys in three New York City locations and licensed to practice immigration law in all 50 U.S. states, we provide top-notch legal services in immigration, bankruptcy, criminal law, divorce, and family law. Our commitment to our clients' well-being is what sets us apart and makes us one of the most reputable law firms in the country</div>
          </div>
        </div>
      </div>

      <div className="chooseUS pt-[120px] h-[630px] bg-cover">
        <div className="relative">
          <div className="px-[40px] py-[22px] left-[62px] top-[-60px] absolute inline-block text-['PT Serif'] bg-white text-[30px] font-bold text-[#155FC3]">WHY CHOOSE US</div>
          <div className='w-[75%] chooseCard py-[70px] px-[100px] text-white'>
            <div className="flex items-start">
              <div className="w-[110px] border-b mt-6 border-white mr-[35px]"></div>
              <div className="italic text-[23px]">We are thorough, steadfast, and rigorous – every case, every client, every single time. </div>
            </div>
            <div>
              <ul className="text-[23px] list-disc mt-[30px]">
                <li>Reputation: We have a reputation for excellence in handling highly complex legal cases</li>
                <li>Convenience: With attorneys in three New York City locations, we make it easy for clients to access our services.</li>
                <li>Dedication: We are dedicated to achieving successful outcomes for our clients and fighting for their rights, no matter how difficult the case may be.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="practice">
        <div className="mt-[60px] flex justify-center">
          <div className="flex flex-col items-center">
            <div className="text-['PT Serif] text-[33px] text-[#155FC3]">Our Services</div>
            <div className="mt-[10px] text-[40px] font-bold">PRACTICE AREAS</div>
            <div id="practice" className="mt-[10px] w-[75px] border-2 border-[#155FC3]"></div>
            <div className="mt-[25px] text-[22px] italic">In each area of service that we offer, we promise that you will receive the very best legal representation in the industry.</div>
          </div>
        </div>
        <div className="w-[90%] mx-auto mt-[35px] text-white">
          <div className="flex justify-center">
            <div className="card1 w-[45%] hover:shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] hover:w-[46%] hover:h-[295px] h-[290px] mr-[25px] pt-[220px] pl-[112px] rounded-[14px] bg-cover">
              <div>IMMIGRATION</div>
            </div>
            <div className="card2 w-[45%] hover:shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] hover:w-[46%] hover:h-[295px] h-[290px] pt-[220px] pl-[112px] rounded-[14px] bg-cover">
              <div>BANKRUPTCY</div>
            </div>
          </div>
          <div className="flex mt-[20px] justify-center">
            <div className="card3 w-[45%] hover:shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] hover:w-[46%] hover:h-[295px] h-[290px] mr-[25px] pt-[220px] pl-[112px] rounded-[14px] bg-cover">
              <div>CRIMINAL</div>
            </div>
            <div className="card4 w-[45%] hover:shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] hover:w-[46%] hover:h-[295px] h-[290px] pt-[220px] pl-[112px] rounded-[14px] bg-cover">
              <div>DIVORCE AND FAMILY</div>
            </div>
          </div>
        </div>
      </div>

      <div className="team">
        <div className="mt-[60px] flex justify-center">
          <div className="flex flex-col items-center">
            <div className="text-['PT Serif] text-[33px] text-[#155FC3]">Our Firm</div>
            <div className="mt-[10px] text-[40px] font-bold">MEET OUR TEAM</div>
            <div className="mt-[10px] w-[75px] border-2 border-[#155FC3]"></div>
            <div className="mt-[25px] text-[22px] italic">Expert legal team at Morgan & Associates. Trust us for immigration, bankruptcy, criminal law, divorce, and family law.</div>
          </div>
        </div>
        <div className="w-[85%] mt-[35px] mx-auto">
          <img src={team} alt="team"/>
        </div>
      </div>

      <div className="review">
        <div className="mt-[60px] flex justify-center">
          <div className="flex flex-col items-center">
            <div className="text-['PT Serif] text-[33px] text-[#155FC3]">Client Review</div>
            <div className="mt-[10px] text-[40px] font-bold">REAL CLIENT STORIES</div>
            <div id="review" className="mt-[10px] w-[75px] border-2 border-[#155FC3]"></div>
          </div>
        </div>
        <div className="reviewBox mt-[58px] h-[550px] bg-cover">
          <div className='w-[50%] mx-auto bg-white p-[50px] rounded-b-[20px]'>
            <div className="text-center italic text-[25px] h-[130px] text-[#004AAD]">"{review.review}"</div>
            <div className="flex justify-between items-center mt-[75px]">
              <img onClick={handleLeftReviewButoonClick} className="cursor-pointer h-[55px] w-[60px]" src={leftButton} alt="left"/>
              <div className="text-[28px] font-bold text-[#004AAD]">{review.name}</div>
              <img onClick={handleRightReviewButoonClick} className="cursor-pointer h-[55px] w-[60px]" src={rightButton} alt="left"/>
            </div>
          </div>
        </div>
      </div>

      <div className="contact">
        <div className="mt-[60px] flex justify-center">
          <div className="flex flex-col items-center">
            <div className="mt-[10px] text-[40px] font-bold">CONTACT US FOR A FREE CONSULTATION</div>
            <div id="contact" className="mt-[10px] w-[75px] border-2 border-[#155FC3]"></div>
          </div>
        </div>
        <div className="form mt-[30px]">
          <div className="w-[55%] mx-auto">
            <div className="flex">
              <input className="w-[100%] px-[20px] py-[15px] font-light mr-[20px] border border-black" placeholder="First name" />
              <input className="w-[100%] px-[20px] py-[15px] border border-black outline-none" placeholder="Last name" />
            </div>
            <div className="flex mt-[25px]">
              <input className="w-[100%] px-[20px] py-[15px] mr-[20px] border border-black" placeholder="First name" />
              <input className="w-[100%] px-[20px] py-[15px] border border-black outline-none" placeholder="Last name" />
            </div>
            <div className="flex mt-[25px] items-center border border-black">
              <input className="w-[100%] px-[20px] outline-none py-[15px]" value={dropDown} placeholder="Type of Case"/>
              <img onClick={toggleDropDown} className="h-[24px] w-[24px] mr-[23px] cursor-pointer" src={downButton} alt="down"/>
            </div>
            <div className={`p-4 flex flex-col rounded-[8px] ${dropDownState ? "" : "hidden"}`}>
              <span onClick={() => {setDropDown("IMMIGRATION"); setDropDownState(0)}} className="pb-2 pt-2 border-b-[1px] cursor-pointer">IMMIGRATION</span>
              <span onClick={() => {setDropDown("BANKRUPTCY"); setDropDownState(0)}} className="pb-2 pt-2 border-b-[1px] cursor-pointer">BANKRUPTCY</span>
              <span onClick={() => {setDropDown("CRIMINAL"); setDropDownState(0)}} className="pb-2 pt-2 border-b-[1px] cursor-pointer">CRIMINAL</span>
              <span onClick={() => {setDropDown("DIVORCE AND FAMILY"); setDropDownState(0)}} className="pb-2 pt-2 border-b-[1px] cursor-pointer">DIVORCE AND FAMILY</span>
            </div>
            <div className="flex mt-[25px] items-center border border-black">
              <textarea className="w-[100%] px-[20px] py-[15px]" rows="7" placeholder="Your message"></textarea>
            </div>
            <button className="w-[100%] mt-[70px] bg-[#004AAD] text-white py-[18px] text-center">YES, I'D LIKE A FREE CONSULTATION</button>
          </div>
        </div>
      </div>

      <div className="footer text-white h-[310px] py-[24px] px-[120px] mt-[70px] bg-cover">
        <img className="h-[60px]" src={logo} alt="logo"/>
        <div className="flex mt-[30px] justify-between">
          <div className="text-[19px]">We stand ready, willing, and able to fight for you every step of the way. </div>
          <div>
            <div className="text-['PT Serif'] text-[19px]">Find Us</div>
            <div className="font-light text-[13px] mt-[18px]">123 Main Street, New York, NY 10001</div>
            <div className="font-light text-[13px] mt-[12px]">124 Main Street, New York, NY 10003</div>
            <div className="font-light text-[13px] mt-[12px]">125 Main Street, New York, NY 10003</div>
          </div>
          <div>
            <div className="text-['PT Serif'] text-[19px]">Contact Us</div>
            <div className="font-light text-[13px] mt-[18px]">(000)-111-1111 (office)</div>
            <div className="font-light text-[13px] mt-[12px]">(000)-111-1112 (fax)</div>
          </div>
          <div>
            <div className="text-['PT Serif'] text-[19px]">About Us</div>
            <div><a href="#firm" className="font-light text-[13px] mt-[18px]">About our Firm</a></div>
            <div><a href="#practice" className="font-light text-[13px] mt-[12px]">Practice Areas</a></div>
            <div><a href="#review" className="font-light text-[13px] mt-[12px]">Client Reviews</a></div>
          </div>
        </div>
        <div className="font-light text-[13px] mt-[30px]">© 2023 Morgan and Associates Law Firm. All rights reserved</div>
      </div>
    </div>
  );
}

export default App;
