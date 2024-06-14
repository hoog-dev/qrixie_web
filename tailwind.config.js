/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        fira: ['Fira Mono'],
        GTWalsheim: ['"GT Walsheim"']
      },
      boxShadow: {
        btn: '4px 4px 0 0 #52D2B8',
        logo: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(82, 210, 184) 4px 4px 0px 0px'
      }
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      primary: '#4F75FE',
      secondary: '#1D3A5F',
      offwhite: '#CCD6F6',
      fadedwhite: '#8892B0',
      bg: '#0A192F',
      darkblue: '#0A192F',
      bglight: '#112240',
      darkgray: '#2D2323',
      lightgray: "#D5D3D3",
      beige: '#FBF9F5',
      text: "#1B1C21"
    }
  },
  plugins: []
}
