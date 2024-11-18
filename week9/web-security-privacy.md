# Web Security and Privacy

## Notes
### Potential Security Oversights
- no user authentication or allowing weak authentication
- not sanitizing for mentries and requests
- not encrypting sensitive communications
- out of datee software, bugs, and sessions do not time out

### Cross Site Scripting
- Attacker inserts arbitrary HTML on your web page
- What could go wrong: change content of page and user can steal information
- How could this happen?
    - HTML with script tags could replace the page with a new one (can redirect
    people to a new website that has malicious content)
    - download user's cookies (passwords) for other sites

- Do not allow any html to be inserted, protect against SQL injection

### Distributed Denial of Service
- DDoS
- Overwhelm a server with malicious requests to block regular users 
- Problem: websites cannot tell if you are human or not, Attacker uses
a number of controlled machines, often compromised (hard to spot)

- Mitigation: 
    - Rate limiting: volume of requests from a user
    - Throw out excess traffic at random (some legitimate)
    - distribute traffic across network 

### Network Security
- Person in the middle attack: user can interfere with users conversing
- Network channels are not necessarily secure

- Secure Communication 
    - want our messsage to be unreadable and impossible to change w/o detectation

### Encryption and Decryption
- Encryption: 
    - Ensures privact within an organization and on the internet 
    - the conversion of data into an unreadable form, called ciphertext
- Decryption

### Browser Server Communication
- can use encrypted communication in a web app
    - HTTPS represents an encrypted (secure) connection
- HTTPS is a secure HTTP 
    - data passed back and forth is encrypted
    - handled by the security sockets layer (SSL)

### Data Collection: Cookies
- Why user want cookies
    - user authentication
    - site preferences 
    - contents of a shopping cart
- devleoper user cookies 
    - preference in ads
    - knowing what the users are interested in 

### Privacy Policy
- Statement saying what the web site does with any information it collects
- generally considered legally binding
- written in dense legal language