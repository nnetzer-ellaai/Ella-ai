import React from 'react';
import { useState } from 'react';
import { validateEmail } from '../../utils/validation';
import FormSuccess from './FormSuccess';
import ellaLogo from '../../assets/ella-logo.png';

type Props = {
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  isModal?: boolean;
};

const inputStyle =
  'font-OneZero-Apparat-Medium bg-inherit placeholder:text-inherit text-[#3E3E3E] border-borderGrey border-0 border-b-[1px] border-solid text-[16px] leading-[100%] tracking-[-0.32px] md:text-[20px] md:leading-[100%] md:tracking-[-0.40px] focus:outline-0 pb-[.5rem] md:h-full  placeholder:opacity-100  pl-[unset]';
const invalidInputStyle =
  'bg-red-500  border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500';
export default function Form({ setError, isModal = false }: Props) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [comments, setComments] = useState('');
  const [mailingList, setMailingList] = useState('true');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isTouched, setIsTouched] = useState({
    fullName: false,
    email: false,
    mailingList: true,
    company: false,

  })



  // check if there is first and lastName
  const isCompanyValid = !!company;
  const isFullNameValid = !!fullName;
  const isEmailValid = validateEmail(email);
  // const isPhoneValid = !!phone;
  const isMailingListValid = mailingList === 'true';
  const isFormValid = isMailingListValid && isFullNameValid && isCompanyValid;

  const params = new URLSearchParams(window.location.search);

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setIsTouched({
      fullName: true,
      email: true,
      mailingList: true,
      company: true,
    });
    if (!isFormValid) return;
    try { window.dataLayer.push({ event: "ella_ai_lead", eventdata: { category: "Ella_AI_LP", action: "form_submit", label: "lead" } }); } catch (_) {}
    setIsLoading(true);

    // Web3Forms — emails to info@ellaai.ai
    const WEB3FORMS_KEY = 'be7811f2-035e-4d36-ac87-7af1f74e045d';

    const payload = {
      access_key: WEB3FORMS_KEY,
      name: fullName,
      email,
      company,
      message: comments || '(no message)',
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      subject: `New lead from Ella.AI website — ${company}`,
    };

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setIsSubmitted(true);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  };
  if (isModal) {
    return (
      <div className="text-[#3E3E3E] w-full">
        {isSubmitted ? (
          <div className="py-6 text-center">
            <p className="font-OneZero-Apparat-Medium text-xl text-darkGrey mb-2">Thanks!</p>
            <p className="font-OneZero-Apparat-Book text-base text-midGrey">We'll be in touch soon.</p>
          </div>
        ) : (
          <form className="flex flex-col gap-5">
            <input className={`${inputStyle} ${isTouched.fullName && !isFullNameValid && invalidInputStyle}`} type="text" name="fullName" placeholder="Name" onChange={(e) => setFullName(e.target.value)} onBlur={() => setIsTouched(p => ({ ...p, fullName: true }))} />
            <input className={`${inputStyle} ${isTouched.email && !isEmailValid && invalidInputStyle}`} type="email" name="email" placeholder="Work Email" onChange={(e) => setEmail(e.target.value)} onBlur={() => setIsTouched(p => ({ ...p, email: true }))} />
            <input className={`${inputStyle} ${isTouched.company && !isCompanyValid && invalidInputStyle}`} type="text" name="Company" placeholder="Company" onChange={(e) => setCompany(e.target.value)} onBlur={() => setIsTouched(p => ({ ...p, company: true }))} />
            <input className={inputStyle} type="text" name="Comments" placeholder="How can we help?" onChange={(e) => setComments(e.target.value)} />
            <button onClick={handleSubmit} type="submit" className="flex items-center gap-2 mt-2 self-start text-white bg-[#3E3E3E] rounded-3xl py-3 px-7 font-OneZero-Apparat-Book text-sm hover:bg-darkGrey/80 transition-colors">
              Send
              {isLoading && <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>}
            </button>
          </form>
        )}
      </div>
    );
  }

  return (
    <div
      className={`
      relative
      z-8
     text-[#3E3E3E]
      rounded-t-[40px]
      md:rounded-none
      md:rounded-r-[40px]
       flex flex-col p-11 pb-[20px]  text-right md:w-[50%] md:justify-center md:items-start md:p-0 md:pl-[90px] md:pr-[129px] `}
    >
      {isSubmitted ? (
        <FormSuccess />
      ) : (
        <div className='md:w-full md:mt-[13px]'>
          <img
            src={ellaLogo}
            alt="Ella.AI Logo"
            className="h-[24px] md:h-[32px] w-auto mb-6 md:mb-8"
          />
          <h2 className="font-OneZero-Apparat-Book text-start md:text-start text-[28px] leading-[50px] md:mb-[45px] md:text-[42px] md:leading-[50px]">
           Contact Us
          </h2>
          {/* <p className="text-center md:text-start leading-5 text-base mt-[8px] md:leading-[25px] md:text-xl">
            הצוות שלנו ישמח לחזור אליך ולענות <br className="md:hidden"/>
            על כל שאלה.
          </p> */}
          <form className="flex flex-col gap-5 my-4 md:mt-6 md:gap-[44px]">
            <input
              className={`${inputStyle} ${
                isTouched.fullName && !isFullNameValid && invalidInputStyle
              }`}
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Name"
              onChange={(e) => setFullName(e.target.value)}
              onBlur={() => {
                setIsTouched((prevState) => ({ ...prevState, fullName: true }));
              }}
            />
            <input
              className={`${inputStyle} ${
                isTouched.email && !isEmailValid && invalidInputStyle
              }`}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => {
                setIsTouched((prevState) => ({ ...prevState, email: true }));
              }}
            />
            <input
              className={`${inputStyle} ${
                isTouched.company && !isCompanyValid && invalidInputStyle
              }`}
              type="text"
              name="Company"
              id="Company"
              placeholder="Company"
              onChange={(e) => setCompany(e.target.value)}
              onBlur={() => {
                setIsTouched((prevState) => ({ ...prevState, fullName: true }));
              }}
            />
            <input
              className={`${inputStyle}`}
              type="text"
              name="Comments"
              id="Comments"
              placeholder="Comments"
              onChange={(e) => setComments(e.target.value)}
              onBlur={() => {
                setIsTouched((prevState) => ({ ...prevState, fullName: true }));
              }}
            />
            {/* <input
              className={`${inputStyle} ${
                isTouched.phone && !isPhoneValid && invalidInputStyle
              }`}
              dir='rtl'
              type="tel"
              name="phone"
              id="phone"
              placeholder="טלפון נייד"
              onChange={(e) => setPhone(e.target.value)}
              onBlur={() => {
                setIsTouched((prevState) => ({ ...prevState, phone: true }));
              }}
              inputMode="numeric"
            /> */}
            {/* <div
              className={`flex gap-2 items-end outline-none md:items-stretch md:mt-[10px]`}
            >
              <input
                className={`w-4 h-4 md:h-5 md:w-5 accent-pink-500 ${
                  isTouched.mailingList &&
                  !isMailingListValid &&
                  invalidInputStyle
                }`}
                // checked
                onChange={(e) => {
                  setMailingList(e.target.checked.toString());
                }}
                type="checkbox"
                name="agreedSmsEmail"
                id="agreedSmsEmail"
              />
              <label
                className={`text-xs  text-[#3E3E3E] leading-none md:text-base ${
                  isTouched.mailingList && !isMailingListValid && 'text-red-700'
                }`}
                htmlFor="agreedSmsEmail"
              >
                תשלחו לי עדכונים הצעות והטבות בטלפון וב - SMS
              </label>
            </div> */}
            <button
              onClick={handleSubmit}
              type="submit"
              className={`flex mt-[20px] self-start text-[16px]   md:mx-0  text-white bg-[#3E3E3E] rounded-3xl py-[12px] px-6 w-fit text-sm font-OneZero-Apparat-Book md:text-base md:self-start }`}
            >
               Submit{' '}
              <svg
                className={`animate-spin -ml-1 mr-3 h-5 w-5 text-white ${
                  isLoading ? 'block' : 'hidden'
                }`}
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
