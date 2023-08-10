import forms from '@tailwindcss/forms';


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'black':"hsl(0,0%,8%)",
      'limish-green': "hsl(153,71%,59%)",
      'greyish-black' : "hsl(0,0%,14%)",
      'whitish-grey' : "hsl(0,0%,85%)",
      'white': "hsl(0,0%,100%)",
      'light-red': "hsl(345,95%,68%)",


    },
    extend: {
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
      fontSize:{
        base: ['18px'],
        lg: ['24px'],
        xl: ['40px'],
        '2xl': ['72px'],
        '3xl': ['88px'],
      },
      lineHeight:{
        base: ['28px','36px'],
        lg: ['32px','40px'],
        xl: ['56px','64px'],
        '2xl': ['88px','96px'],

    },
    letterSpacing:{
      xl:'-1.5px',
      '2xl':'-2.5px',
  },
  plugins: [
    forms,
  ],
}
}
}