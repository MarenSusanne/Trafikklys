let redlight = document.getElementById('red')
        let yellowlight = document.getElementById('yellow')
        let greenlight = document.getElementById('green')


        function startlightsred(){
            redlight.innerHTML = `<div class="light" id="red" style="background-color: red;"></div>`
            yellowlight.innerHTML = `<div class="light" id="red" style="background-color: aliceblue;"></div>`
            greenlight.innerHTML = `<div class="light" id="red" style="background-color: aliceblue;"></div>`
        }
        
        function startlightsredyellow(){
            redlight.innerHTML = `<div class="light" id="red" style="background-color: red;"></div>`
            yellowlight.innerHTML = `<div class="light" id="red" style="background-color: yellow;"></div>`
            greenlight.innerHTML = `<div class="light" id="red" style="background-color: aliceblue;"></div>`
        }

        function startlightsyellow(){
            redlight.innerHTML = `<div class="light" id="red" style="background-color: aliceblue;"></div>`
            yellowlight.innerHTML = `<div class="light" id="red" style="background-color: yellow;"></div>`
            greenlight.innerHTML = `<div class="light" id="red" style="background-color: aliceblue;"></div>`
        }

        function startlightsyellowgreen(){
            redlight.innerHTML = `<div class="light" id="red" style="background-color: aliceblue;"></div>`
            yellowlight.innerHTML = `<div class="light" id="red" style="background-color: yellow;"></div>`
            greenlight.innerHTML = `<div class="light" id="red" style="background-color: green;"></div>`
        }

        function startlightsgreen(){
            redlight.innerHTML = `<div class="light" id="red" style="background-color: aliceblue;"></div>`
            yellowlight.innerHTML = `<div class="light" id="red" style="background-color: aliceblue;"></div>`
            greenlight.innerHTML = `<div class="light" id="red" style="background-color: green;"></div>`
        }

        function startlightsgreenred(){
            redlight.innerHTML = `<div class="light" id="red" style="background-color: red;"></div>`
            yellowlight.innerHTML = `<div class="light" id="red" style="background-color: aliceblue;"></div>`
            greenlight.innerHTML = `<div class="light" id="red" style="background-color: green;"></div>`
        }

        function automate(){
            setTimeout(startlightsred, 1000)
            setTimeout(startlightsredyellow, 2000)
            setTimeout(startlightsgreen, 3000)
            setTimeout(startlightsyellow, 4000)
            setTimeout(startlightsred, 5000)
        }
