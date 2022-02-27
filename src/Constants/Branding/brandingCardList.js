import brandingStrategy from '../../Assests/brandingPage/branding_strategy.png';
import websiteInteractive from '../../Assests/brandingPage/website_interactive.png';
import productDesign from '../../Assests/brandingPage/product_design.png';
import uxuiService from '../../Assests/brandingPage/uxui_service.png';

export const brandingCardList = [
    {
        img : brandingStrategy,
        type : 'Branding',
        description : 'Brand strategy & identity',
        cardFooterBg : '#0D0D0D',
        footerTextColor : '#FFFFFF' 
    },
    {
        img : websiteInteractive,
        type : 'Web Development',
        description : 'Websites & interactive Apps Developnent',
        cardFooterBg : '#0D0D0D',
        footerTextColor : '#FFFFFF' 
    },
    {
        img : productDesign,
        type : 'Software Development',
        description : 'Product Design & Development',
        cardFooterBg : '#0D0D0D',
        footerTextColor : '#FFFFFF' 
    },
    {
        img : uxuiService,
        type : 'Designing',
        description : 'UI-UX Services',
        cardFooterBg: "#0554F2",
        footerTextColor : '#FFFFFF' 
    },
]

export const stageFlow = [
    {
        name : 'Value Proposition',
        description : 'A statement that maps out the key aspects of product: what it is, who it is for and how it will be used.'
    },
    {
        name : 'Product Strategy',
        description : 'The foundation of a product life-cycle and the execution plan for further development.'
    },
    {
        name : 'Competitive Audit',
        description : 'A comprehensive analysis of competitor products that maps out their existing features in a comparable way.'
    },
    {
        name : 'Heuristic Evaluation',
        description : 'A detailed analysis of a product that highlights good and bad design practices in existing product.'
    },
    {
        name : 'Brainstorming',
        description : 'Brainstorming allows the team to visualize a broad range of design solutions before deciding which one to stick with.'
    },
    {
        name : 'Product Roadmap',
        description : 'Product’s evolution plan with prioritized features. It could be a spreadsheet, a diagram or even a bunch of sticky notes.'
    },
]