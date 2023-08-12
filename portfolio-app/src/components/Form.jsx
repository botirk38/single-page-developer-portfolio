import PropTypes from 'prop-types';
import {useForm} from 'react-hook-form';
import { useState } from 'react';


export default function Form({contactRef}) {
    const {register, handleSubmit,formState:{ errors }} = useForm();
    const [showSuccessModal, setShowSuccessModal] = useState(false); 

    const onSubmit = async (data) => {
        try {
            const response = await fetch('/.netlify/functions/sendForm', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            console.log(response);
            
            if (response.ok) {
                console.log('Form submitted successfully');
                setShowSuccessModal(true);
            } else {
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };
    

    return (
      <section ref={contactRef} className="flex flex-col text-white justify-items-center items-center text-center bg-greyish-black w-full  bg-form-img border-white border-b lg:flex-row lg:px-10 lg:py-10 lg:items-start  ">
        
        <div className="flex flex-col justify-center items-center lg:px-10">
            <h1 className="text-xl font-bold p-2">Contact</h1>
            <p className="font-base p-4 lg:p-10">
            I would love to hear about your project and how I could help. Please fill in the form,
            and I&rsquo;ll get back to you within 48 hours.
            </p>
        </div>
        <form name="contact-form" data-netlify="true" onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center w-full  sm:max-w-sm md:max-w-md lg:max-w-lg lg:py-10 xl:max-w-xl px-2">

          <div className=" relative flex flex-col items-center border-b border-white py-2 mb-4 w-full">
            <input {...register("fullName",{required:'Please enter your full name, so I know who you are!'})} className="appearance-none bg-greyish-black border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="NAME" aria-label="Full name"/>
            {errors.fullName && (
                <span className="hidden lg:absolute lg:inset-y-0 lg:right-0 lg:flex lg:items-center text-light-red text-base font-bold bg-transparent rounded-full border-2 border-light-red w-7 h-7 flex justify-center items-center">
                    !
                </span>
            )}
          </div>
          <p className='self-end text-light-red'>{errors.fullName?.message}</p>
          <div className="relative flex flex-col items-center border-b border-white py-2 mb-4 w-full">
            <input
                {...register("email", {
                    required: "How am I gonna reach you with no email?!",
                    pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                    },
                })}
                className="appearance-none bg-greyish-black border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                type="email"
                placeholder="EMAIL"
                aria-label="email"
            />
            {errors.email && (
                <span className="hidden lg:absolute lg:inset-y-0 lg:right-0 lg:flex lg:items-center text-light-red text-base font-bold bg-transparent rounded-full border-2 border-light-red w-7 h-7 flex justify-center items-center">
                    <p>!</p>
                </span>
            )}
          </div>
          <p className='self-end text-light-red'>{errors.email?.message}</p>
          <div className=" relative flex flex-col items-center border-b border-white py-2 w-full ">
            <input {...register("message",{required:"Let me know your message so I can know how to help you!",minLength:
            {
                value: 10,
                message: "Please send me a message that is at least 10 characters long."

            }})} className="appearance-none z-0 bg-greyish-black border-none w-full text-gray-700 bg-form-img py-10 px-2 leading-tight focus:outline-none" type="text" placeholder="MESSAGE" aria-label="message"/>
            {errors.message && (
                <span className="hidden lg:absolute lg:inset-y-0 lg:right-0 lg:top-8 lg:flex lg:items-center text-light-red text-base font-bold bg-transparent rounded-full border-2 border-light-red w-7 h-7 flex justify-center items-center">
                    <p>!</p>
                </span>
            )}
          </div>
          <p className='self-end text-light-red'>{errors.message?.message}</p>
          <div className="flex justify-center items-end flex-col text-center mb-20 mt-5 w-full ">
            <button type="submit" className="text-white text-base py-6 border-0 border-b-4 border-limish-green uppercase tracking-widest font-bold hover:text-limish-green">Send Message</button>
          </div>
        </form>

        {showSuccessModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-md">
            <div className="modal-content bg-greyish-black p-8 rounded shadow-lg">
            <p>Your form was submitted successfully!</p>
            <button onClick={() => setShowSuccessModal(false)} className="text-white bg-red-600 px-4 py-2 mt-4 rounded">Close</button>
            </div>
        </div>
        )}

      </section>
    );
  }
  
  Form.propTypes = {
    contactRef: PropTypes.object.isRequired,
    };