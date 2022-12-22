

import React, { useState } from 'react';
import "./Post.css";
import ReactHtmlParser from 'react-html-parser';
// import Parser from "react-html-parser"

import { Navigate } from "react-router-dom";
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './PostDetail.css'
// import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: '20px'

    },
    heading: {
        fontSize: theme.typography.pxToRem(26),
        fontWeight: theme.typography.fontWeightRegular,
    },
    head: {
        color: 'black"',


    },
    head1: {
        color: '#dc3545;',

        '&:hover': {
            color: "black",
        },
    },
    tit: {
        color: '#dc3545;',

        '&:hover': {
            color: "black",
        },
    }
}));


const PostDetail = ({ productBlog, blog }) => {
console.log("PostDetail",productBlog)
    const [showTable, setShowTable] = useState(true)
    const classes = useStyles();

    const validate = (content) => {
        if (content.includes('>') || content.includes('id=')) {
            content = content.substring(content.indexOf('>') - 3, content.length - 1)
        }

        let start = content.indexOf('text]')
        let end = content.length - 1
        let str = content.substring(start + 5, end)


        str = str.split('<img').join(`<img wdith="300px" height="350px"`)

        return str
    }



    const resizeImages = (content) => {
        // if (content.includes('>') || content.includes('id=')) {
        //     content = content.substring(content.indexOf('>') - 3, content.length - 1)
        // }

        let start = content.indexOf('text]')
        let end = content.length - 1
        let str = content.substring(start + 5, end)


        str = str.split('<img').join(`<img wdith="500px" height="500px"`)

        return str
    }



    const validateContentHeading = (html, id) => {
        let content = html
        content = blackHeadings(content)
        if (content.includes('Conclusion:')) content = omitConclusion(content)
        if (html === false || html === 'false') return ""
        return content

    }

    const validateTableOfContetSubheading = (html, id) => {

        let c = html.split('h3').join('p')
        return c
    }





    const validateContent = (content, id) => {
       content = omitStartHtml(content)
        content = omitWpShortCodes(content)
        content = resizeImages(content)
        content = endInverts(content)
        content = darkenPara(content)
        // content = omitEndTag(content)
        content = content.split(`[/et_pb_column][/et_pb_row][/et_pb_section`).join('')
        //content = endHref(content)
        return content
    }


    const omitStartHtml = (c) => {

        if (c.length === 0) return ""


        if (c.includes('admin_label=&#8221;Text&#8221;]') && c.includes('If you are here')) {
            c = c.substring(c.indexOf('admin_label=&#8221;Text&#8221;]') + 30, c.length)
            c = c.split('strong').join('span')
            c = c.split(`<span style="text-decoration: underline;">`).join('<span style="text-decoration: none;">')
            c = c.split('<a/>').join('<span/>')
            return "<p>" + c + "</p>"

        }
        

        else if (c.substring(0, 8).includes('<p>We')) {
            return "<p>W" + c + "</p>"
        }

        else if (c.substring(0, 50).includes('>')) {
            //  alert(c)
            return "<p>" + c.substring(c.indexOf('>'), c.length  ) 
        }

        else if ("strong>") {
            c.split('strong>', '')
            return "<p>" + c + "</p>"
        }

        else {
            return "<p>" + c + "</p>"
        }

    }

    const omitWpShortCodes = (c) => {
        // let shortcodeInit = c.indexOf('[/et_')
        // let instance = c.substring(shortcodeInit - 25, shortcodeInit + 100)
        // //alert(`inst : ${instance}`)
        // let shortcodeEnd = instance.indexOf(']')
        // let shortcode = instance.substring(shortcodeInit, shortcodeInit + shortcodeEnd)
        // alert(shortcode)
        // c.split(shortcode).join('')


        if (c.includes(`[/et_pb_text][/et_pb_column]`)) {
          
           c = c.substring(c , c.length - 81)
        

        }


        return c
    }
    const endHref = (content) => {
        // if (content.includes('a href')) alert(content)
        content = content.split(`a href`).join('span href')
        return content
    }


    const omitConclusion = (content) => {
        content = content.substring(0, content.lastIndexOf('<h2'))
        return content
    }

    const omitEndTag = (content) => {
        return content.substring(0, content.length - 3)
    }

    const blackHeadings = (content) => {
        //   alert (content)

        content = content.toString()
        content = content.split(`<span style="color: var(--tcb-skin-color-0);"`).join(`<span style="color:black"`)
        content = content.split(`<a href`).join(`<a style="text-decoration:none" href`)

        return content
    }

    const endInverts = (content) => {
        content = content.split(`&#8220;`).join('')
        content = content.split(`&#8221;`).join('')

        return content
    }

    const darkenPara = (content) => {

        content = content.split('<ul>').join(`<div style="color:black">`)
        content = content.split('</ul>').join(`</div>`)


        return content

    }


    const validateConclusion = (c, id) => {
        var content = c.substring(0, c.indexOf('[/et_pb_text][/et_pb_column][/et_pb_row][/et_pb_section]'))
        return content
    }



    const titlize = (titleHtml, id) => {
        document.getElementById(id).innerHTML = titleHtml
        return titleHtml
    }


    const tableHeading = (html, id) => {

        if (html && id) {
            let c = html.split('h2').join('h4').split('href').join('void')
            return c
        } else {
            return html
        }
    }

    console.log("detailPage==>", productBlog)
    return <div style={{backgroundColor:"white"}}>
        {!productBlog && <Navigate to="/blog" />}

        <div className="title pt-2 font-size-small border-btm " style={{ fontFamily: 'Roboto', fontSize: '48px', fontWeight: '700', color: '#dc3545;', backgroundColor:"white" }}>
            <p className={classes.tit}> {ReactHtmlParser(productBlog && productBlog.title)}</p>
        </div>

        {/* <SimpleAccordion productBlog={productBlog} />
        <br />
        <br /> */}


        {/* <AccordionSummary
            onClick={() => { setShowTable(!showTable) }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{ backgroundColor: 'white', border: '1px solid white' }}
        >
            <Typography className={classes.head} style={{ fontWeight: '700', fontFamily: 'Roboto', fontSize: '26px' }}>Table of Contents (click to expand)</Typography>
        </AccordionSummary> */}

        {
            showTable &&


            <Grid container spacing={35} style={{ diplay: showTable, flexDirection: 'row', boxShadow: "0px 0px 8px 1px gray", backgroundColor: "white" }}  >
                {productBlog?.sections?.map((item, index) => {
                    if (item.Heading) {
                        return (
                            <Grid style={{ height: 'auto', flexDirection: 'column', paddingTop: '10px' }} container xs={10} sm={12} md={6} lg={6} >

                                <a href={"#" + item.Heading} className={classes.head1} style={Styles.tableItemText} onClick={() => { console.log(item.Heading) }} >
                                    {item.Heading && ReactHtmlParser(item.Heading.split('h2').join('h4').split('href').join('void'))}
                                </a>



                                <div style={Styles.tableSubHeadings} >
                                    {item.Subheadings.map((subheading, indexify) => {
                                        return (
                                            <div className="grids" href={"#" + item.Heading}

                                                style={{ marginLeft: '22px', fontFamily: "Roboto", textDecoration: 'none', color: 'black' }} >
                                                {ReactHtmlParser(validateTableOfContetSubheading(subheading))}
                                            </div>



                                        )

                                    })}
                                </div>

                            </Grid>
                        )
                    } else {
                        return null
                    }
                })}
            </Grid>

        }


        <br />
        <br />

        {productBlog?.sections?.map((item) => {
            return (
                <div  >
                    <h2 id={item.Heading} style={{ textDecoration: 'none', color: '#dc3545;' }} > {ReactHtmlParser(validateContentHeading(item.Heading))} </h2>

                    <div id={item.subheading && item.subheading} style={{ fontFamily: 'Roboto', fontSize: '20px', fontStyle: 'normal', lineHeight: '1.6', color: 'black', marginBottom: '5%', }}>
                        {ReactHtmlParser(validateContent(item.Content))}
                    </div>

                </div>
            )
        })}

        <div>
            {ReactHtmlParser(productBlog.conclusion && validateConclusion(productBlog.conclusion))}
        </div>


    </div>
}

export default PostDetail;




const Styles = ({
   
    Image: {
        width: '55%',
        height: '55%',
        marginLeft: '5%',
        marginBottom: '1%'
    },
    titleContainer: {
        marginLeft: '5%',
        width: '55%',
        marginBottom: '3%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Title: {
        color: '#dc3545;',
    },


    firstParaContainer: {
        width: '70%',
        marginLeft: '5%',
        marginBottom: '5%'

    },
    tableOfContentsContainer: {
        width: '70%',
        height: 'auto',
        marginLeft: '5%',
        overflow: 'hidden',
        boxShadow: '0px 0px 8px 2px lightgray',
        marginBottom: '5%'
    },

    tableOfContentsHeading: {
        width: "100%",
        height: '50px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
    },

    tableItemText: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: '24px',
        marginLeft: '7%',
        marginBottom: '0px',

        textDecoration: 'none',
        hover: {
            color: 'black',
            backgroundColor: 'black'
        }
    },


    tableSubHeadings: {
        height: 'auto',
        marginLeft: '15px',
        marginBottom: '25px'
    },
    contentSection: {
        marginLeft: '5%',
    },
    contentHeading: {
        color: 'orange',
    },
    contentPara: {
        width: '70%',
    }

})