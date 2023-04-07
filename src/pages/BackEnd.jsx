import {React} from 'react';
import './backend.css';
import RightContainer from '../components/containers/RightContainer';
import LeftContainer from '../components/containers/LeftContainer';

export default function BackEnd(){

return(
<div className='backendContainer'>

    <LeftContainer text='Internet' links={[
      {url:'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work', text:'How it works?'},
      {url:'https://www.cloudflare.com/en-gb/learning/ddos/glossary/hypertext-transfer-protocol-http/', text:'What is HTTP'},
      {url:'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name', text:'What is a DNS?'},
      {url:'https://www.youtube.com/watch?v=htbY9-yggB0&ab_channel=Pickaweb.co.uk', text:'What is hosting?'},
   ]} />

   <RightContainer text='' links={[
      {url:'https://web.dev/howbrowserswork/', text:'How browsers work'},
      {url:'https://www.techtarget.com/searchwindowsserver/definition/command-line-interface-CLI#:~:text=A%20command%2Dline%20interface%20(CLI)%20is%20a%20text%2D,interfaces%20and%20character%20user%20interfaces.', text:'what is a CLI'},
   ]} />

    <LeftContainer text='Learn a language' links={[
        {url:'https://www.w3schools.com/js/', text:'JavaScript'},
        {url:'https://www.w3schools.com/java/default.asp', text:'Java'},
        {url:'https://www.w3schools.com/cs/index.php', text:'C#'},
        {url:'https://www.w3schools.com/php/default.asp', text:'PHP'},
        {url:'https://www.ruby-lang.org/en/', text:'Ruby'},
        {url:'https://www.python.org/', text:'Python'},
    ]} />

    <RightContainer text='GIT' links={[
      {url:'https://www.youtube.com/watch?v=zbKdDsNNOhg&ab_channel=Udacity', text:'What is GIT?'},
      {url:'https://www.youtube.com/watch?v=SWYqp7iY_Tc&ab_channel=TraversyMedia', text:'Crash Course'},
      {url:'https://git-scm.com/docs', text:'GIT docs'},
      {url:'https://www.youtube.com/watch?v=w3jLJU7DT5E&ab_channel=GitHub', text:'What is Github?'},
      {url:'https://www.youtube.com/watch?v=wpISo9TNjfU&ab_channel=IBMTechnology', text:'GIT vs Github'},
   ]} />

    <LeftContainer text='Terminal Usage' links={[
        {url:'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line', text:'CLI'},
        {url:'https://www.youtube.com/watch?v=jDINUSK7rXE&ab_channel=LearnCode.academy', text:'Cheat sheet'},
    ]} />

    <RightContainer text='OS' links={[
      {url:'https://edu.gcfglobal.org/en/computerbasics/understanding-operating-systems/1/', text:'What is OS'},
      {url:'https://www.guru99.com/os-tutorial.html', text:'OS summary'},
      {url:'https://www.youtube.com/watch?v=26QPDBe-NB8&ab_channel=CrashCourse', text:'Crash course'},
    ]} />

    <LeftContainer text='' links={[
        {url:'https://dev.to/deepu105/demystifying-memory-management-in-modern-programming-languages-ddd', text:'Memory management'},
        {url:'https://www.tutorialspoint.com/operating_system/os_io_hardware.htm', text:'I/O'},
    ]} />

    <RightContainer text='' links={[
      {url:'https://aws.amazon.com/what-is/computer-networking/', text:'Networking'},
      {url:'https://www.youtube.com/watch?v=exbKr6fnoUw&ab_channel=DaveCrabbe', text:'Threads'},
      {url:'https://www.youtube.com/watch?v=iKtvNJQoCNw&ab_channel=MikeSwift', text:'Concurrency'},
    ]} />

    <LeftContainer text='Relational databases' links={[
        {url:'https://www.postgresql.org/', text:'PostgreSQL'},
        {url:'https://www.geeksforgeeks.org/what-is-postgresql-introduction/', text:'postgreSQL?'},
        {url:'https://www.youtube.com/watch?v=qw--VYLpxG4&ab_channel=freeCodeCamp.org' , text:'Postegres course'},    
    ]} />

    <RightContainer text='' links={[
        {url:'https://www.mysql.com/' , text:'MySQL'},
        {url:'https://www.youtube.com/watch?v=9ylj9NR0Lcg&ab_channel=TraversyMedia' , text:'MySQL Tutorial'},
    ]} />

    <LeftContainer text='' links={[
        {url:'', text:''},
        {url:'', text:''},
        {url:'', text:''},
    ]} />

</div>
)
}