import React from 'react'
import { HeaderTabsColored } from './header'
import { FooterLinks } from './footer'

type Props = {
    children: React.ReactNode;
  };

const Layout: React.FC<Props>= ({children}) => {

    const user = {
        "name": "Julian Quispe",
        "email": "janspoon@fighter.dev",
        "image": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
    }
    const tabs =[
        "Música",
        "Deportes",
        "Teatro",
        "Entretenimiento",
        "Cursos",
        "Otros Eventos",
    ]
      
    const data= [
          {
            "title": "About",
            "links": [
              {
                "label": "Features",
                "link": "#"
              },
              {
                "label": "Pricing",
                "link": "#"
              },
              {
                "label": "Support",
                "link": "#"
              },
              {
                "label": "Forums",
                "link": "#"
              }
            ]
          },
          {
            "title": "Project",
            "links": [
              {
                "label": "Contribute",
                "link": "#"
              },
              {
                "label": "Media assets",
                "link": "#"
              },
              {
                "label": "Changelog",
                "link": "#"
              },
              {
                "label": "Releases",
                "link": "#"
              }
            ]
          },
          {
            "title": "Community",
            "links": [
              {
                "label": "Join Discord",
                "link": "#"
              },
              {
                "label": "Follow on Twitter",
                "link": "#"
              },
              {
                "label": "Email newsletter",
                "link": "#"
              },
              {
                "label": "GitHub discussions",
                "link": "#"
              }
            ]
          }
    ]

    return (
        <>
        <HeaderTabsColored
            user={user}
            tabs={tabs}
        ></HeaderTabsColored>
            {children}
        <FooterLinks
            data={data}
        ></FooterLinks>
        </>
    )
}

export default Layout