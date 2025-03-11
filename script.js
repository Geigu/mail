function generateRandomString(length) {
            const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let result = '';
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            return result;
        }

        function generateRandomNumber(length) {
            let result = '';
            for (let i = 0; i < length; i++) {
                result += Math.floor(Math.random() * 10);
            }
            return result;
        }

        function generateEmail() {
            const usernameInput = document.getElementById('username').value;
            const passwordInput = document.getElementById('password').value;
            const domainInput = document.getElementById('domain').value;

            const randomLetters = generateRandomString(7);
            const randomNumbers = generateRandomNumber(5);
            const email = `${randomLetters}${randomNumbers}@${domainInput}`;

            const output = `${usernameInput}:${email}:${passwordInput}`;
            document.getElementById('result').innerText = output;
            document.getElementById('copyButton').style.display = 'inline-block';
            document.getElementById('copyEmailButton').style.display = 'inline-block';
            document.getElementById('copyPasswordButton').style.display = 'inline-block';
        }

        function copyToClipboard() {
            const resultText = document.getElementById('result').innerText;
            navigator.clipboard.writeText(resultText).then(() => {
                const copyButton = document.getElementById('copyButton');
                copyButton.textContent = 'Copied';
                copyButton.style.backgroundColor = 'black';
                setTimeout(() => {
                    copyButton.textContent = 'Copy';
                    copyButton.style.backgroundColor = '#007bff';
                }, 2000);
            });
        }

        function copyEmailToClipboard() {
            const resultText = document.getElementById('result').innerText;
            const email = resultText.split(':')[1];
            navigator.clipboard.writeText(email).then(() => {
                const copyEmailButton = document.getElementById('copyEmailButton');
                copyEmailButton.textContent = 'Copied';
                copyEmailButton.style.backgroundColor = 'black';
                setTimeout(() => {
                    copyEmailButton.textContent = 'Copy Email';
                    copyEmailButton.style.backgroundColor = '#007bff';
                }, 2000);
            });
        }

        function copyPasswordToClipboard() {
            const resultText = document.getElementById('result').innerText;
            const password = resultText.split(':')[2];
            navigator.clipboard.writeText(password).then(() => {
                const copyPasswordButton = document.getElementById('copyPasswordButton');
                copyPasswordButton.textContent = 'Copied';
                copyPasswordButton.style.backgroundColor = 'black';
                setTimeout(() => {
                    copyPasswordButton.textContent = 'Copy Password';
                    copyPasswordButton.style.backgroundColor = '#007bff';
                }, 2000);
            });
        }

        document.getElementById('generateButton').addEventListener('click', generateEmail);
