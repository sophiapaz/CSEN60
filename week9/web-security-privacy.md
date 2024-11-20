# Web Security

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
    - symmetric and asymmetric encryption
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

### Secure Socket Layer (SSL)
- developed by Netscape
- encrypts data sent between a client and web server
- https is http over ssl 
- Digital Certificate:
    - A form of an asymmetric key
    - contains information about the Certificate
    - used by ssl to authenticate
    - stores public key

# Web Privacy
### Data Collection 
- forms, user entry, social networks, online shopping, online finances
- data is always related to privacy

### Cookies
- definition: a name/vale pair created by a website to store information on
a computer
- user authentication and site preference (why we use cookies)

### Behavior Logging
- Any action a user takes on a webpage can be logged
- HTML event listeners!
- time between actions (ex: how long spent looking at a post)

### Lots of Sensitive Information 
- Legally sensitive
    - Heath information: HIPPA
    - Student information: FERPA
    - Information about children: COPPA
- Personally identifiable Information (PII)
    - name, address, phone, email 
    - age, gender, race (demographics)
    - past contributions: purchases, rentals, etc
- Financial information
    - credit cards
    - debit cards

### Privacy Policy
- statement saying what websites are collecting

### Developer - Legal Responsibility
- Privacy has legal implications 
- developer is responsible for breaches of policy
    - best efforts to avoid them 

### Bodies
- GDPR (europe)
    - General Data Protection Regulation
    - must collect minimum amount of data to achieve stated purpose
    - consumers have the right to be forgotten
- CCPA (cali)
    - California consumer privacy act
    - less strict than GDPR 
    - opt out and consent