import React, { useRef, useState } from 'react';
 
type Props = {
  group:string
  relationship: string
  setIsDialogShow: React.Dispatch<React.SetStateAction<boolean>>
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>
  setWillAttend: React.Dispatch<React.SetStateAction<boolean>>
}
 
const Form = ({
  group, 
  relationship,
  setIsDialogShow, 
  setIsSubmitted,
  setWillAttend
}:Props) => {
  const [invitationType, setInvitationType] = useState(''); 
  const [showFeastQuestions, setShowFeastQuestions] = useState(false)
  const [showCeremonyQuestions, setShowCeremonyQuestions] = useState(false)
  const backgroundImage = "url('./assets/form-background.jpg')";
  const formRef = useRef<HTMLFormElement>(null);

  
  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission
    const scriptURL =
      "https://script.google.com/macros/s/AKfycby2fmg0PyIgNWCow6OkMH4MlLHMqdZkQhaTKLvNzJi_nvxRcmh9gySEar3RGJmYvtKN/exec";

    const formData = new FormData(event.currentTarget);
    if (formData.get('ceremony_attendance') === 'yes' || formData.get('feast_attendance') === 'yes') {
      setWillAttend(true)
    }
    setIsDialogShow(true) 
    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });


      if (response.ok) {
        // Handle success
        setIsSubmitted(true) 
        if (formRef.current) {
          formRef.current.reset()
        } 
      } else {
        // Handle error if response is not ok (status code is not 2xx) 
        console.log("Error submitting form. Please try again.");
      }
    } catch (error) {
      // Handle network or other errors 
      console.error(error)
      console.log("An error occurred. Please check your connection.");
    }
    // setIsDialogShow(false)
  }
  

  const handleInvitationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInvitationType(value);
  };

  return (
    <div className='w-full rounded-lg  shadow-lg overflow-hidden z-10 border-[1px] border-black/20 bg-white '>

    <form className={`form  p-5 gap-4 flex flex-col items-center bg-[${backgroundImage}]`} 
      ref={formRef}
      onSubmit={handleOnSubmit}> 
        {/* Name */}
      <h1>聯絡資訊</h1>
      {/* <HGroup> */}
      <div className='h_group'>
          <label htmlFor="name">姓名</label>
          <input type="text" id="name" name="name" autoComplete="name" required />
      </div>
      {/* </HGroup>  */}

        {/* Phone */}
        <div className='h_group'>
          <label htmlFor="phone">聯絡電話</label>
          <input type="text" id="phone" name="phone" autoComplete="tel" required/>
        </div> 


        <div className='h_group'>
          <label className="block font-medium">關係</label>
          <div>
            <input type="radio" name="relationship" value="m"required defaultChecked={relationship==="m"}/>
            <label htmlFor="digital">男方</label>
          </div>
          <div>
            <input type="radio" name="relationship" value="f" defaultChecked={relationship==="f"}/>
            <label htmlFor="paper">女方</label>
          </div>
        </div>
        <div className='h_group'>
          <label>備註</label>
          <input type="text" id="address" name="relationship_memo" defaultValue={group}/>
        </div> 


        {/* Invitation */}
        <div className='label_group'>
          <label>請問您希望收到紙本喜帖還是電子喜帖？</label>
          <div className='h_group'>
            <div>
              <input type="radio" name="invitation_type" value="paper" onChange={handleInvitationChange}/>
              <label htmlFor="paper">紙本喜帖</label>
            </div>
            <div>
              <input type="radio" name="invitation_type" value="digital" onChange={handleInvitationChange} required />
              <label htmlFor="digital">電子喜帖</label>
            </div>
            <div>
              <input type="radio" name="invitation_type" value="both" onChange={handleInvitationChange} required />
              <label htmlFor="both">都要</label>
            </div>
          </div>
        </div> 

        {/* Address */}
        {invitationType !== '' && (
          <div className='sub_question_group'>
            {(invitationType === 'paper' || invitationType === 'both' ) && <div className='label_group'>
              <label htmlFor="address">地址（含郵遞區號）</label>
              <input type="text" id="address" name="address"/>
            </div>}
            {/* Email */}
            {(invitationType === 'digital' || invitationType == 'both')  && <div className='label_group'>
              <label htmlFor="email" >email 信箱</label>
              <input type="email" id="email" name="email" autoComplete="email"/>
            </div>}
          </div>
        )}
         


        <h1>參與資訊</h1>

        {/* Ceremony Attendance */}
        <div className='h_group'>
          <label>請問您是否參與證婚儀式？</label>
          <div>
            <input type="radio" id="ceremony-yes" name="ceremony_attendance" value="yes" onChange={()=>setShowCeremonyQuestions(true)}/>
            <label htmlFor="ceremony-yes">是</label>
          </div>
          <div>
            <input type="radio" id="ceremony-no" name="ceremony_attendance" value="no" onChange={()=>setShowCeremonyQuestions(false)} />
            <label htmlFor="ceremony-no">否</label>
          </div>
        </div>
        

        {/* Ceremony Amount */}
        {showCeremonyQuestions && (
          <div className='sub_question_group'>
          <div className='label_group'>
            <label htmlFor="ceremony_amount">證婚儀式出席人數</label>
            <input type="number" id="ceremony_amount" name="ceremony_amount"  defaultValue="1" min="1" />
          </div>
          </div>
        )}

        {/* Feast Attendance */}
        <div className='h_group'>
          <label className="block font-medium">請問您是否參與喜宴？</label>
          <div>
            <input type="radio" id="feast-yes" name="feast_attendance" value="yes" onChange={()=> setShowFeastQuestions(true)} required />
            <label htmlFor="feast-yes">是</label>
          </div>
          <div>
            <input type="radio" id="feast-no" name="feast_attendance" value="no" onChange={()=> setShowFeastQuestions(false)} />
            <label htmlFor="feast-no">否</label>
          </div>
        </div> 

        {/* Feast Amount Fields */}
        {showFeastQuestions && (
          <>
            <p className='text-sm px-2 opacity-70 w-full'>為了評估禮物數量，我們需要分別知道大人、小孩的數量。<br/>幼童不算人頭，如果需要準備幼兒座椅，請填寫在下面。</p>
            <div className='sub_question_group' id="feast_questions">
              <div className='label_group'>
                <label htmlFor="feast_amount_adult">喜宴出席人數（大人）</label>
                <input type="number" id="feast_amount_adult" name="feast_amount_adult" defaultValue="1" min="0" />
              </div>
              <div className='label_group'>
                <label htmlFor="feast_amount_child" >喜宴出席人數（兒童）</label>
                <input type="number" id="feast_amount_child" name="feast_amount_child" defaultValue="0" min="0" />
              </div> 
              <div className='label_group'>
                <label htmlFor="feast_amount_baby_seat">需要幾張幼兒座椅</label>
                <input type="number" id="feast_amount_baby_seat" name="feast_amount_baby_seat" defaultValue="0" min="0" />
              </div> 

                <div className='h_group'>
                <label>飲食偏好</label> 
                  <div>
                    <input type="radio" id="normal" name="food_preference" value="normal" required />
                    <label htmlFor="normal">葷</label>
                  </div>
                  <div>
                    <input type="radio" id="vegetarian" name="food_preference" value="vegetarian" />
                    <label htmlFor="vegetarian">素</label>
                  </div>  
                </div>
            </div>
          </>
        )}
        <h1>留言</h1>
        {/* Message */}
        <label htmlFor="message" className="block font-medium mx-2">終於等到了這天，如果您有什麼話想對我們說，或是願意給我們祝福，歡迎您留言給我們～</label>
        <textarea id="message" name="message" rows={4} ></textarea> 

        {/* Submit Button */}
        <div className='w-64 m-auto'>
          <button type="submit" className="w-full bg-[hsl(12,75%,66%)] hover:bg-[hsl(12,85%,70%)] text-white py-2 rounded-md">提交表單</button>
        </div> 
      </form>
    </div>
  );
};





export default Form;