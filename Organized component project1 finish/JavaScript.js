function Header() {
    return (

        <header>
            <nav class="nav"> <img src="react.png" class="nav-logo"></img> 
        <ul class="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        </nav>
        </header>
    )
}
function Footer(){
    return(
        <footer>
            <small class="footer">@ 2022 Alamin development. All right reserved.</small>
        </footer>
    )
}
function MainPage(){
    return(<div> <h1>Fun Facts about React</h1>
    <ol>
        <li>Was First released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k star on gitHub</li>
    </ol>
    </div>)
}
function MyPage() {
    return (

        <div>
            <Header />
           <MainPage />
           <Footer />

        </div>
    )
}
ReactDOM.render(<MyPage />, document.getElementById("root"))