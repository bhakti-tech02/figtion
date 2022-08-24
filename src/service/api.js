import { apis } from "service";

    

    const COMMON_URL=`https://`

    const API_URLS={GET_RECENTFILESORGIDNULL27 : `${COMMON_URL}www.figma.com/api/recent_files?org_id=null%27`,POST_LOGIN : `${COMMON_URL}nodedemo.dhiwise.co/device/auth/login`}

    export const getRecentfilesorgidnull27 =(payload)=> apis.get(API_URLS.GET_RECENTFILESORGIDNULL27,
  {...payload,params:{"org_id":"null",...payload?.params},headers:{"authority":"www.figma.com","accept":"application/json","accept-language":"en-GB,en-US;q=0.9,en;q=0.8","content-type":"application/json","cookie":"figma.session=BAh7B0kiD3Nlc3Npb25faWQGOgZFVG86HVJhY2s6OlNlc3Npb246OlNlc3Npb25JZAY6D0BwdWJsaWNfaWRJIkU3MDZkMjQ0MDgxYzI1NDA5ZjhhM2I2MjhkMDQ1MmJjZDBhODY3NTZkZDgzNzQ5YzhmMWJlYTBiNTE2YmYxOTQzBjsARkkiCmZsYXNoBjsARnsA--33baa4eb2fe5ae66ebd581e94a10fa7664d68899; figma.mst=1; local_experiments=%22e30=%22; _gcl_au=1.1.2065600740.1658122667; _fbp=fb.1.1658122667265.461234822; cb_user_id=null; cb_group_id=null; cb_anonymous_id=%22d4d3764a-342b-4ce9-8c09-fb6db1651ec2%22; ajs_user_id=%221127461673325067198%22; ajs_anonymous_id=%2238c1657a-07f0-4db3-b295-754ed51fc3bb%22; experiment_seed=455705; _tt_enable_cookie=1; _ttp=243ed7e5-afaa-4472-a4f5-e7840f19f5c6; recent_user_data=%22eyJjb21tdW5pdHlVc2VySWQiOm51bGwsImNvbW11bml0eVByb2ZpbGVJZCI6IjExMjc0NjE2NzM0NDUwMTQwOTAiLCJmaWxlQnJvd3NlclVzZXJJZCI6IjExMjc0NjE2NzMzMjUwNjcxOTgiLCJ1c2VySWRUb09yZ0lkIjp7IjExMjc0NjE2NzMzMjUwNjcxOTgiOm51bGx9fQ==%22; __Host-figma.authn=%7B%221127461673325067198%22%3A%22figtkn.authn.YLESgf7701ivaD4buC4rOa%22%7D; __Host-figma.embed=%7B%221127461673325067198%22%3A%22figtkn.embed.7ABOonnppzR39J8hALfUPp%22%7D; AWSALBTG=fOLFK8Q9TBnd0l6DxBLeUhIDZYDfSBHSj1UEDGJfJi2+ScJOZEHUwQmsLWFPqVj1ItKO94TFkwHdV/8wk+2Eq6BIgRAjpiVTKz7lC+fIbCFRUnplB1ditSqzRt/5ycaVcsyW9kESfEDCxGU/e7aSFm/r9ghvx5cEIfzLI0lU/QT5; AWSALBTGCORS=fOLFK8Q9TBnd0l6DxBLeUhIDZYDfSBHSj1UEDGJfJi2+ScJOZEHUwQmsLWFPqVj1ItKO94TFkwHdV/8wk+2Eq6BIgRAjpiVTKz7lC+fIbCFRUnplB1ditSqzRt/5ycaVcsyW9kESfEDCxGU/e7aSFm/r9ghvx5cEIfzLI0lU/QT5; AWSALB=+BTfG/LPpBcgX4wYPaP7/nbjk3f+pykj30DFlvzHRK4ulxnWxig/lJcbSYZUDpw4TsKbWu8C0I+5gip/RJy3hCBeCU6UkbwAOcseEnxxQDNaFkgq6nk+sMUi8fhq; AWSALBCORS=+BTfG/LPpBcgX4wYPaP7/nbjk3f+pykj30DFlvzHRK4ulxnWxig/lJcbSYZUDpw4TsKbWu8C0I+5gip/RJy3hCBeCU6UkbwAOcseEnxxQDNaFkgq6nk+sMUi8fhq","referer":"https://www.figma.com/files/recent?fuid=1127461673325067198","sec-ch-ua":"".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"","sec-ch-ua-mobile":"?0","sec-ch-ua-platform":""Linux"","sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"same-origin","tsid":"O10UbQPnTz58IRuy","user-agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36","x-csrf-bypass":"yes","x-figma-user-id":"1127461673325067198",...payload?.headers},});
    
export const postLogin =(payload)=> apis.post(API_URLS.POST_LOGIN,
  {...payload,headers:{"Content-Type":"application/json",...payload?.headers},});
    

    