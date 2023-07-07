import portfolio from '../assets/img/project/portfolio.png'
import form from '../assets/img/project/form.png'
import restaurant from '../assets/img/project/restaurant.png'
import smartshop from '../assets/img/project/smartshop.png'
import dashboard from '../assets/img/project/dashboard.png'


const projects = [
    { id: 1, img: dashboard, using: 'Javascript React HTML5 CSS3 MaterialUI ChartJS', nameProject: 'Dashboard Admin', desc: 'Admin Dashboard for Product and User Management', toLink: 'https://dashboard-admin-xi.vercel.app/' },
    { id: 2, img: restaurant, using: 'Javascript React HTML5 TailwindCss ReactScroll', nameProject: 'Restaurant', desc: 'Café Restaurant - Reservation and Menu Display Functionality', toLink: 'https://restaurant-landing-bice.vercel.app/' },
    { id: 3, img: smartshop, using: 'Javascript React HTML5 CSS3 Context SwiperJS', nameProject: 'Smart Shop', desc: 'Smartwatch Store - Product Addition and Deletion Capabilities', toLink: 'https://smart-shop-gamma.vercel.app/' },
    { id: 4, img: portfolio, using: 'Javascript ReactJS HTML5 ReactRouterDom TailwindCss', nameProject: 'Portfolio', desc: 'Personal Website for Contacting Me and Showcasing Projects and Skills', toLink: 'https://portfolio-gilt-five-39.vercel.app/' },
    { id: 5, img: form, using: 'Javascript ReactJS HTML5 Axios Formik Yup ReactRouterDom', nameProject: 'Form', desc: 'Validated Form for User Registration, Account Deletion, and User Profile Update', toLink: 'https://form-three-xi.vercel.app/' },
]

const skills = [
    { id: 1, headSkill: 'Languages', bodySkill: 'Germany A1' },
    { id: 2, headSkill: 'Lang Programming', bodySkill: 'TypeScript JavaScript' },
    { id: 3, headSkill: 'Tools', bodySkill: 'VSCode Git Github Photoshop' },
    { id: 5, headSkill: 'Frameworks', bodySkill: 'ReactJS' },
    { id: 4, headSkill: 'Other', bodySkill: 'HTML CSS RestAPI MaterialUI Redux TailwindCss React-Bootstrap' },
]

const pageAboutSoftSkills = [
    { id: 1, skills: 'Responsibility' },
    { id: 2, skills: 'Competition-oriented mindset' },
    { id: 3, skills: 'Collaboration' },
    { id: 4, skills: 'Teaching' },
    { id: 5, skills: 'Openness to criticism' },
    { id: 6, skills: 'Teamwork' },
    { id: 7, skills: 'Public relations' },
    { id: 8, skills: 'Problem-solving skills' },
    { id: 9, skills: 'I am interested in immigrating to Germany.' },
]

const PageProjectSkills = [
    { id: 1, nameProject: 'Personal Site Darkmod', headSkill: 'Front-end', bodySkill: 'Javascript ReactJS HTML5 CSS3 SwiperJS', toLink: 'https://personal-website-seven-sepia.vercel.app/' }
]

export { projects, skills, pageAboutSoftSkills, PageProjectSkills }