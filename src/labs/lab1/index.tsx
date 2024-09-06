export const Lab1 = () => {
  return (
    <div id="wd-labs">
      <div id="wd-lab1" className="lab-container">
        <h2>Lab One</h2>
        <h3>Jerry Gao</h3>
        <h4>Section 20595 | 7PM (EST) Thursday Lecture</h4>
        <ul className="link-ul">
            <li>
                <a href="https://northeastern.instructure.com/courses/192548/assignments/2423279?module_item_id=10952038">Lab Assignment 1 (Canvas)</a>
            </li>
            <li>
                <a href="https://a1--kanbas-react-app-cs5610-jerrygao.netlify.app">Lab Assignment 1 (Live Deployment)</a>
            </li>
            <li>
                {/* idk what this is supposed to link to yet */}
                <a href="https://main--kanbas-react-app-cs5610-jerrygao.netlify.app">Kanbas Application (Live Deployment)</a> 
            </li>
            <li>
                <a href="https://github.com/jjxrry/cs5610">Source Code Repo (Github)</a>
            </li>
            <li>
                {/* back to top ig */}
                <a href="/">Back to Landing Page</a>
            </li>
        </ul>
        <h3>HTML Examples</h3>
        <div id="wd-h-tag">
            <h4>Heading Tags</h4>
            Text documents are often broken up into several sections and subsections. Each section is usually prefaced with a short title or heading that attempts to summarize the topic of the section it precedes. For instance this paragraph is preceded by the heading Heading Tags. The font of the section headings are usually larger and bolder than their subsection headings. This document uses headings to introduce topics such as HTML Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used to format plain text so that it renders in a browser as large headings. There are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and h6. Tag h1 is the largest heading and h6 is the smallest heading.
        </div>
        <div id="wd-p-tag">
            <h4>Paragraph Tag</h4>
            <p id="wd-p-1"> ... do we keep this? lab instructions show html incremental id formatting with p-1 starting here but doesn't show on right-side render</p>
            <p id="wd-p-2">
            This is the first paragraph. The paragraph tag is used to format
            vertical gaps between long pieces of text like this one.
            </p>
            <p id="wd-p-3">
            This is the second paragraph. Even though there is a deliberate white
            gap between the paragraph above and this paragraph, by default
            browsers render them as one contiguous piece of text as shown here on
            the right.
            </p>
            <p id="wd-p-4">
            This is the third paragraph. Wrap each paragraph with the paragraph
            tag to tell browsers to render the gaps.
            </p>
        </div>
        <div id="wd-lists">
            <h4>List Tags</h4>
            <h5>Ordered List Tag</h5>
            How to make pancakes:
            <ol id="wd-pancakes">                      
                <li>Mix dry ingredients.</li>
                <li>Add wet ingredients.</li>
                <li>Stir to combine.</li>
                <li>Heat a skillet or griddle.</li>
                <li>Pour batter onto the skillet.</li>
                <li>Cook until bubbly on top.</li>
                <li>Flip and cook the other side.</li>
                <li>Serve and enjoy!</li>
            </ol>
            My Favorite Recipe:
            <ol id="wd-your-favorite-recipe">                      
                <li>Open ramen packet.</li>
                <li>Add dry ingredients to a bowl with water.</li>
                <li>Heat for around 3 minutes in the microwave.</li>
            </ol>
            <h5>Unordered List Tag</h5>
            Professor's favorite books (in no particular order)
            <ul id="wd-my-books">
                <li>Dune</li>
                <li>Lord of the Rings</li>
                <li>Ender's Game</li>
                <li>Red Mars</li>
                <li>The Forever War</li>
            </ul>
            My favorite books (in no particular order)
            <ul id="wd-your-books">
                <li>The Giver</li>
                <li>Slaughterhouse 5</li>
                <li>A Little Life</li>
            </ul>
        </div>
        <div id="wd-tables">
            <h4>Table Tag</h4>
            <table border={1} width="100%">
            <thead>
                <tr>
                <th>Quiz</th>
                <th>Topic</th>
                <th>Date</th>
                <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Q1</td>
                <td>HTML</td>
                <td>2/3/21</td>
                <td>85</td>
                </tr>
                <tr>
                <td>Q2</td>
                <td>CSS</td>
                <td>2/10/21</td>
                <td>90</td>
                </tr>
                <tr>
                <td>Q3</td>
                <td>JavaScript</td>
                <td>2/17/21</td>
                <td>95</td>
                </tr>
                <tr>
                <td>Q4</td>
                <td>Routing</td>
                <td>2/17/23</td>
                <td>75</td>
                </tr>
                <tr>
                <td>Q5</td>
                <td>State & Redux</td>
                <td>1/9/22</td>
                <td>97</td>
                </tr>
                <tr>
                <td>Q6</td>
                <td>Node</td>
                <td>6/27/24</td>
                <td>91</td>
                </tr>
                <tr>
                <td>Q7</td>
                <td>Session</td>
                <td>2/17/21</td>
                <td>100</td>
                </tr>
                <tr>
                <td>Q8</td>
                <td>MongoDB</td>
                <td>7/17/21</td>
                <td>88</td>
                </tr>
                <tr>
                <td>Q9</td>
                <td>Mongoose</td>
                <td>4/4/22</td>
                <td>65</td>
                </tr>
                <tr>
                <td>Q10</td>
                <td>APIs</td>
                <td>9/18/24</td>
                <td>90</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                <td colSpan={3}>Average</td>
                <td>90</td>
                </tr>
            </tfoot>
            </table>
        </div>
        {/* 2.10 here */}
    </div>
  </div>
);}
