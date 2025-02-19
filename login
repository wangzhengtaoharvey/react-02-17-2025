<!DOCTYPE html>
<html>

<head>
    <title>Login</title>
    <link rel="stylesheet" href="login_css_file.css">
</head>

<body>
    <div class="container">
        <h2>Sign Up</h2>
        <form>
            <div class="input-group">
                <input type="text" placeholder="First Name" required>
                <input type="text" placeholder="Last Name" required>
            </div>

            <input type="tel" placeholder="Mobile No." required>
            <input type="email" placeholder="Email Address" required>

            <div class="input-group">
                <input type="password" placeholder="Password" required>
                <input type="password" placeholder="Confirm Password" required>
            </div>

            <div class="checkbox-group">
                <input type="checkbox" id="agree">
                <label for="agree">I Agree</label>
            </div>

            <p>By clicking <a href="#">Register</a>, you agree to the
                <a href="#">Terms and Conditions</a> set out by this site, including our Cookie Use.
            </p>

            <div class="button-group">
                <button type="submit" class="register-btn">Register</button>
                <button type="button" class="signin-btn">Sign In</button>
            </div>
        </form>

    </div>

</body>
</html>
