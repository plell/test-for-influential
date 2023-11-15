type MenuItem = {
    title: string
    icon:string
}

export const menuItems:MenuItem[] = [{
    title: 'Home',
    icon:'sidebar/home-3.svg'
},{
    title: 'Submit Violations',
    icon:'sidebar/add-files.svg'
},{
    title:'Whitelist',
    icon:'sidebar/scroll.svg'
},{
    title:'Billing',
    icon:'sidebar/questionnaire-tablet.svg'
},{
    title:'Affliate Program',
    icon:'sidebar/graph-up.svg'
},{
    title:'Settings',
    icon:'sidebar/setting-2.svg'
},{
    title:'FAQ',
    icon:'sidebar/message-question.svg'
},{
    title:'Support',
    icon:'sidebar/rescue.svg'
    },] 

export type CounterProps = {
    count: number
    icon: string
    color: string
    desc: string
    borderBottom:string
    }

export const counters:CounterProps[] = [
    { count: 252, icon: 'disconnect', color: '#EEF6FF', desc: 'Links Scraped', borderBottom: '#3E97FF' },
    { count: 252, icon: 'magnifier', color: '#F8F5FF', desc: 'Links Manually Checked', borderBottom: '#7239EA' },
    { count: 252, icon: 'information-3', color: '#F6C0001a', desc: 'Link Violations', borderBottom: '#F6C000' },
    {count: 252, icon:'trush',color:'#F1416C1a',desc:'Links Removed', borderBottom:'#F1416C'}
]
    
const randNum = () => Math.floor(Math.random()*999999) 

const generateRow = () => {

    const removed = Math.random() - .5 < 0 ? true : false
    const google = Math.random() - .5 < 0 ? true : false
    

    return [
        {
            value: randNum(),
            style: {
                color: '#181C32',
                fontSize: 14,
                fontStyle: 'normal',
                fontWeight: 600,
                // lineHeight: 14
            }
        },
        {
            value: '23 Sep 2023',
            style: {
                color: '#7E8299',
                fontSize: 14,
                fontStyle: 'normal',
                fontWeight: 600,
                // lineHeight: 14
            }
        },
        {
            value: 'https://google.com',
            href: 'https://google.com',
            style: {
                color: '#3E97FF',
                fontSize: 14,
                fontStyle: 'normal',
                fontWeight: 600,


                    }
        },
        {
            value: google?'Google':'Reddit',
            style: {
                color: '#7E8299',
                
                fontSize: 14,
                fontStyle: 'normal',
                fontWeight: 600,    }
        },
        {
            value: removed ? 'Delisted' : 'Removed',
            parentStyle: {
                display:'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                height: 87
            },
            style: {
                fontSize: 14,
                fontStyle: 'normal',
                fontWeight: 600,
                borderRadius: 4,
                color:removed?'#D9214E':'#50CD89',
                background: removed?'#FFF5F8':'#E8FFF3',
                display: 'flex',
                width:'fit-content',
                padding: 7,
                justifyContent: 'center',
                alignItems: 'center',

            }
        },
    ]
}

export const tableData = {
    headers: ['ID', 'DATE REMOVED', 'LINK', 'SOURCE', 'Action'],
    rows: [
        // row 1
        generateRow(),
        generateRow(),
        generateRow(),
        generateRow(),
        generateRow(),
        generateRow(),
    ],

}


export const pageButtons = [1,2,3,4,5]

