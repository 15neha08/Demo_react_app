import AwesomeQuestion from '../../Assests/home/awesome_question.png';
import TimeLapse from '../../Assests/home/material_timelapse.png';
import OpenDocument from '../../Assests/home/open_document.png';
import AppScreen1 from '../../Assests/home/APP_SCREEN_1.png';
import Appscreen from '../../Assests/home/APP_SCREEN.png';
import GooglePlay from '../../Assests/home/google_play.png';
import AppStore from '../../Assests/home/app_store.png';

export const serviceList = [
    {
        img : OpenDocument,
        title : 'Wondering when ‘IT’ got added to your job description?',
        description : 'It’s hard to execute your primary responsibilities well if you’re also the go-to person to deal with IT issues. At Electric, some of our most ardent champions are business leaders and employees who’ve been in your shoes. Electric manages your entire IT environment, from day-to-day issues to cybersecurity, so you can focus on doing your job.'
    },
    {
        img : AwesomeQuestion,
        title : 'Is outsourced IT the source of all your headaches?',
        description : 'From unpredictable timelines to hidden costs, dealing with the lack of transparency from traditional managed service providers is frustrating at best. That’s why every element of Electric’s IT model, from flat-rate pricing to chat-based support, is centered around clarity and communication so teams can stay effective, efficient, and productive.'
    },
    {
        img : TimeLapse,
        title : 'Don’t have the bandwidth to test your bandwidth?',
        description : 'Are you getting the support you need to do your job effectively and manage all of your team’s IT needs like network management and employee on/offboarding? Electric fills the gaps in your IT infrastructure, allowing you to shift your focus to strategic IT initiatives like contingency planning, employee education, and actually getting the bandwidth you’re paying for.'
    }
]

export const productCardList = [
    {
        img : AppScreen1,
        title1 : 'Announcements, Promotions,',
        title2 : 'Speaches - Radio in Radius for us',
        description : 'Broadcast your thoughts, announcements, promotions or views over your own radio channel.',
        position : 'end',
        backgroundColor : '#FFF',
        buttonText : 'On App Store',
        buttonIcon : AppStore,
        buttonClassName : 'google_app_store'
    },
    {
        img : Appscreen,
        title1 : 'Why Do You Need To Join',
        title2 : 'As an audience',
        description : 'Just the invite from channel owners or the participants.',
        position:  'flex-start',
        backgroundColor : '#F8FAFD',
        buttonText : 'On play Store',
        buttonIcon : GooglePlay,
        buttonClassName : 'google_play_store'
    }
]