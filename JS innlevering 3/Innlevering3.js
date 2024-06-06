const player = document.getElementById('player');
const familiar1 = document.getElementById('familiar1');
const familiar2 = document.getElementById('familiar2');
const familiar3 = document.getElementById('familiar3');
const familiar4 = document.getElementById('familiar4');
const familiar5 = document.getElementById('familiar5');
const objects = document.querySelectorAll('.object');
const eggs = document.querySelectorAll('.egg');

let playerX = window.innerWidth / 2;
let playerY = window.innerHeight / 2;

const menuButton = document.querySelector('.menu-button');
const circularMenu = document.querySelector('.circular-menu');
const upgrades = document.getElementById('upgrades');
const inventory = document.getElementById('inventory');
const tutorial = document.getElementById('tutorial');
const achievements = document.getElementById('achievements');
const upgradesMenu = document.getElementById('upgrades-menu');
const achievementsMenu = document.getElementById('achievements-menu');
const inventoryMenu = document.getElementById('inventory-menu');
const tutorialPage = document.getElementById('tutorialPage');

const completedAchievements = document.getElementById("completedAchievements");
const breakObjectsProgress = document.getElementById('breakObjectsProgress');
const breakObjectsBox = document.getElementById('breakObjectsBox');
const gainCoinsProgress = document.getElementById('gainCoinsProgress');
const gainCoinsBox = document.getElementById('gainCoinsBox');
const playTimeProgress = document.getElementById('playTimeProgress');
const playTimeBox = document.getElementById('playTimeBox');
const purchaseUpgradesBox = document.getElementById('purchaseUpgradesBox');
const purchaseUpgradesProgress = document.getElementById('purchaseUpgradesProgress');

menuButton.addEventListener('click', function () {
    upgradesMenu.style.display = 'none';
    achievementsMenu.style.display = 'none';
    inventoryMenu.style.display = 'none';
    tutorialPage.style.display = 'none';
    circularMenu.classList.toggle('open');
    closeAllPetInfoTabs();
});

document.addEventListener('keydown', (m) => {
    if (m.key in keys) {
        keys[m.key] = true;

        if (m.key === 'm' || m.key === 'M') {
            upgradesMenu.style.display = 'none';
            achievementsMenu.style.display = 'none';
            inventoryMenu.style.display = 'none';
            tutorialPage.style.display = 'none';
            circularMenu.classList.toggle('open');
            closeAllPetInfoTabs();
        }
    }
}); 321

// Close the menu when clicking outside of it
//document.addEventListener('click', function (event) {
//  if (!circularMenu.contains(event.target) && !menuButton.contains(event.target)) {
//    circularMenu.classList.remove('open');
//}
//});

upgrades.addEventListener('click', function () {
    circularMenu.classList.remove('open');
    upgradesMenu.style.display = 'block';
});

achievements.addEventListener('click', function () {
    circularMenu.classList.remove('open');
    achievementsMenu.style.display = 'block';
});

inventory.addEventListener('click', function () {
    circularMenu.classList.remove('open');
    inventoryMenu.style.display = 'block';
});

tutorial.addEventListener('click', function () {
    circularMenu.classList.remove('open');
    tutorialPage.style.display = 'block';
});

function closeUpgradesMenu() {
    upgradesMenu.style.display = 'none';
}
function closeAchievementsMenu() {
    achievementsMenu.style.display = 'none';
}
function closeInventoryMenu() {
    inventoryMenu.style.display = 'none';
    closeAllPetInfoTabs();
}

function closeTutorialPage() {
    tutorialPage.style.display = 'none';
}

let completedAchievementsCounter = 0;
const breakObjects = 5;
const gainCoins = 10000;
const playTime = 1200;
const purchaseUpgrades = 5;
let objectsBroken = 0;
let coinsGained = 0;
let playedTime = 0;
let purchasedUpgrades = 0;
let finishedBreakObjects = false;
let finishedGainCoins = false;
let finishedPlayTime = false;
let finishedPurchaseUpgrades = false;


function updateAchievements() {
    if (finishedBreakObjects == false) {
        if (objectsBroken >= 5) {
            showAlert('"Object Breaker" achievement completed!', "success")
            diamonds += 10;
            breakObjectsBox.style.backgroundColor = 'lightgreen';
            breakObjectsProgress.style.width = ((objectsBroken / breakObjects) * 100) + '%';
            completedAchievementsCounter++;
            finishedBreakObjects = true;
        }
        else {
            breakObjectsProgress.style.width = ((objectsBroken / breakObjects) * 100) + '%';
        }
    }
    if (finishedGainCoins == false) {
        if (coinsGained >= 10000) {
            showAlert('"Coin Collector" achievement completed!', "success")
            diamonds += 15;
            gainCoinsProgress.style.width = ((coinsGained / gainCoins) * 100) + '%';
            gainCoinsBox.style.backgroundColor = 'lightgreen';
            completedAchievementsCounter++;
            finishedGainCoins = true;
        }
        else {
            gainCoinsProgress.style.width = ((coinsGained / gainCoins) * 100) + '%';
        }
    }
    if (finishedPlayTime == false) {
        if (playedTime >= 1200) {
            showAlert('"No-Life" achievement completed!', "success")
            diamonds += 100;
            playTimeProgress.style.width = ((playedTime / playTime) * 100) + '%';
            playTimeBox.style.backgroundColor = 'lightgreen';
            completedAchievementsCounter++;
            finishedPlayTime = true;
        }
        else {
            playTimeProgress.style.width = ((playedTime / playTime) * 100) + '%';
        }
    }
    if (finishedPurchaseUpgrades == false) {
        if (purchasedUpgrades >= 5) {
            showAlert('"Upgrader" achievement completed!', "success")
            diamonds += 100;
            purchaseUpgradesProgress.style.width = ((purchasedUpgrades / purchaseUpgrades) * 100) + '%';
            purchaseUpgradesBox.style.backgroundColor = 'lightgreen';
            completedAchievementsCounter++;
            finishedPurchaseUpgrades = true;
        }
        else {
            purchaseUpgradesProgress.style.width = ((purchasedUpgrades / purchaseUpgrades) * 100) + '%';
        }
    }

}

let speed = 5;
let upgradeSpeed = 10;
let petEquips = 1;
let equippedPets = 1;
let upgradePetEquips = 50;
let moneyFromObjects = 1000;
let diamondsFromObjects = 10;
let upgradeCoinsCost = 10000;
let upgradeCoinsLevel = 0;

const speedCostDisplay = document.getElementById('speedCostDisplay');
const petEquipCostDisplay = document.getElementById('petEquipCostDisplay');
const coinUpgradeCostDisplay = document.getElementById('coinUpgradeCostDisplay');
const upgradeSpeedBtn = document.getElementById('upgradeSpeedBtn');
const upgradePetEquipBtn = document.getElementById('upgradePetEquipBtn');
const upgradeCoinsBtn = document.getElementById('upgradeCoinsBtn');

function upgradeMovementSpeed() {
    if (speed < 10 && diamonds >= upgradeSpeed) {
        speed++;
        diamonds -= upgradeSpeed;
        purchasedUpgrades++;
        showAlert("Speed oppgradert for " + upgradeSpeed + " diamanter. Ny speed: " + speed, "success")
        upgradeSpeed *= 2;
        speedCostDisplay.innerText = 'for ' + upgradeSpeed + ' diamonds';
        if (speed == 10) {
            speedCostDisplay.innerText = '';
            upgradeSpeedBtn.innerText = 'Max speed'
        }
    } else if (speed == 10) {
        showAlert("Maks speed er nådd ", "error")
    } else {
        showAlert("Du har ikke nok diamanter. Du mangler: " + (upgradeSpeed - diamonds), "error")
    }
}

function upgradePetEquip() {
    if (petEquips < 5 && diamonds >= upgradePetEquips) {
        petEquips++;
        diamonds -= upgradePetEquips;
        purchasedUpgrades++;
        showAlert("Pet Equips oppgradert for " + upgradePetEquips + " diamanter. Ny pet equips: " + petEquips, "success")
        upgradePetEquips *= 2.5;
        petEquipCostDisplay.innerText = 'for ' + upgradePetEquips + ' diamonds';
        if (petEquips == 5) {
            petEquipCostDisplay.innerText = '';
            upgradePetEquipBtn.innerText = 'Max pet equips'
        }
    } else if (petEquips == 5) {
        showAlert("Maks pet equips er nådd ", "error")
    } else {
        showAlert("Du har ikke nok diamanter. Du mangler: " + (upgradePetEquips - diamonds), "error")
    }
}

function upgradeCoins() {
    if (upgradeCoinsLevel < 3 && money >= upgradeCoinsCost) {
        moneyFromObjects *= 10;
        diamondsFromObjects *= 5;
        money -= upgradeCoinsCost;
        upgradeCoinsLevel++;
        purchasedUpgrades++;
        showAlert("Coins level oppgradert for " + upgradeCoinsCost + " penger. Ny penger fra objects: " + moneyFromObjects, "success")
        upgradeCoinsCost *= 20;
        coinUpgradeCostDisplay.innerText = 'for ' + upgradeCoinsCost + ' coins';

        const objectIds = ['object1', 'object2', 'object3', 'object4', 'object5', 'object6', 'object7', 'object8', 'object9'];
        objectIds.forEach(objectId => {
            objectHealths[objectId] = 50 + 250 * upgradeCoinsLevel;
            if (upgradeCoinsLevel == 1) {
                document.getElementById(objectId).style.backgroundImage = "url('Bilder/pileCoins.png')";
                document.getElementById(objectId).style.width = '60px';
                document.getElementById(objectId).style.height = '60px';
            }
            else if (upgradeCoinsLevel == 2) {
                document.getElementById(objectId).style.backgroundImage = "url('Bilder/heapCoins.png')";
                document.getElementById(objectId).style.width = '70px';
                document.getElementById(objectId).style.height = '70px';
            }
            else if (upgradeCoinsLevel == 3) {
                document.getElementById(objectId).style.backgroundImage = "url('Bilder/coinChest.png')";
                document.getElementById(objectId).style.width = '80px';
                document.getElementById(objectId).style.height = '80px';
                coinUpgradeCostDisplay.innerText = '';
                upgradeCoinsBtn.innerText = 'Max coin level'
            }
            updateHealthBar(objectId, objectHealths[objectId]);
        });
    } else if (upgradeCoinsLevel == 3) {
        showAlert("Maks coin level er nådd ", "error")
    } else {
        showAlert("Du har ikke nok penger. Du manger: " + (upgradeCoinsCost - money), "error")
    }
}


function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert ' + type;
    alertDiv.textContent = message;
    document.body.appendChild(alertDiv);

    setTimeout(function () {
        alertDiv.remove();
    }, 2000);
}

const keys = {
    w: false,
    a: false,
    s: false,
    d: false,
    W: false,
    A: false,
    S: false,
    D: false,
    e: false,
    E: false,
    m: false,
    M: false,
    ArrowUp: false,
    ArrowLeft: false,
    ArrowDown: false,
    ArrowRight: false,
};

document.addEventListener('keydown', (e) => {
    if (e.key in keys) {
        keys[e.key] = true;
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key in keys) {
        keys[e.key] = false;
    }
});

function movePlayer() {
    let moveX = 0;
    let moveY = 0;

    if (keys.w || keys.W || keys.ArrowUp) moveY -= 1;
    if (keys.a || keys.A || keys.ArrowLeft) moveX -= 1;
    if (keys.s || keys.S || keys.ArrowDown) moveY += 1;
    if (keys.d || keys.D || keys.ArrowRight) moveX += 1;

    const length = Math.sqrt(moveX * moveX + moveY * moveY);
    if (length !== 0) {
        moveX = (moveX / length) * speed;
        moveY = (moveY / length) * speed;
    }

    playerX += moveX;
    playerY += moveY;

    player.style.transform = `translate(${playerX}px, ${playerY}px)`;

    eggs.forEach((egg, index) => {
        const eggId = `egg${index + 1}`;
        const eggRect = egg.getBoundingClientRect();
        const eggCenterX = eggRect.left + eggRect.width / 2;
        const eggCenterY = eggRect.top + eggRect.height / 2;

        const distance = Math.sqrt((playerX - eggCenterX) ** 2 + (playerY - eggCenterY) ** 2);

        if (distance <= 75) {
            document.getElementById(`egg-slots${index + 1}`).classList.remove('hidden');
            document.getElementById(`buyEggsBtn${index + 1}`).classList.remove('hidden');
        } else {
            document.getElementById(`egg-slots${index + 1}`).classList.add('hidden');
            document.getElementById(`buyEggsBtn${index + 1}`).classList.add('hidden');
        }
    });

    // Move familiars
    moveFamiliars();
    requestAnimationFrame(movePlayer);
}

function moveFamiliars() {
    const spreadAngle = (2 * Math.PI) / petsOnPlayer;

    if (petsOnPlayer === 1) {
        const pet = [familiar1, familiar2, familiar3, familiar4, familiar5].find(pet => !isPetAttacking(pet));
        if (pet) {
            const angleToPet = Math.atan2(playerY - pet.getBoundingClientRect().top, playerX - pet.getBoundingClientRect().left);
            const newX = playerX - petFollowRadius * Math.cos(angleToPet);
            const newY = playerY - petFollowRadius * Math.sin(angleToPet);
            movePets(newX, newY, pet);
        }
    } else {
        [familiar1, familiar2, familiar3, familiar4, familiar5].forEach((familiar, index) => {
            if (!isPetAttacking(familiar)) {
                const angle = index * spreadAngle;
                const newX = playerX + petFollowRadius * Math.cos(angle);
                const newY = playerY + petFollowRadius * Math.sin(angle);
                movePets(newX, newY, familiar);
            }
        });
    }
}

function isPetAttacking(familiar) {
    return familiar.dataset.targetObject !== "";
}

function movePets(targetX, targetY, pet) {
    const petRect = pet.getBoundingClientRect();
    const startX = petRect.left + window.scrollX;
    const startY = petRect.top + window.scrollY;
    const distanceX = targetX - startX;
    const distanceY = targetY - startY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    const frames = 50;
    let currentFrame = 0;

    const interval = setInterval(() => {
        currentFrame++;
        if (currentFrame >= frames) {
            clearInterval(interval);
            pet.style.transform = `translate(${targetX}px, ${targetY}px)`; // Ensure pet reaches exact target position
        } else {
            const newX = startX + (distanceX / frames) * currentFrame;
            const newY = startY + (distanceY / frames) * currentFrame;
            pet.style.transform = `translate(${newX}px, ${newY}px)`;
        }
    }, 20);
}

document.addEventListener('click', (event) => {
    const clickX = event.clientX;
    const clickY = event.clientY;

    objects.forEach((object) => {
        const rect = object.getBoundingClientRect();
        const objectRadius = rect.width / 2;

        const centerX = rect.left + objectRadius;
        const centerY = rect.top + objectRadius;

        const distance = Math.sqrt((clickX - centerX) ** 2 + (clickY - centerY) ** 2);

        if (distance <= objectRadius) {
            if (typeof window["petsOn" + object.id] === 'undefined') {
                window["petsOn" + object.id] = 0;
            }
            window["petsOn" + object.id]++;
            petsOnPlayer--;
            if (!familiarMoving) {
                sendPetToTarget(object);
            }
        }
    });
});

let petDmg = 5;
let objectHealths = {};
let familiarMoving = false;
let targetObjectId = null;

let petsOnPlayer = 5;
let petsOnobject1 = 0;
let petsOnobject2 = 0;
let petsOnobject3 = 0;
const petFollowRadius = 50;
const petObjectRadius = 50;

familiar1.dataset.targetObject = "";
familiar2.dataset.targetObject = "";
familiar3.dataset.targetObject = "";
familiar4.dataset.targetObject = "";
familiar5.dataset.targetObject = "";

objects.forEach((object, index) => {
    const objectId = `object${index + 1}`;
    objectHealths[objectId] = 100 + 500 * upgradeCoinsLevel;
    updateHealthBar(objectId, objectHealths[objectId]);
});

function sendPetToTarget(object) {
    let petToSend = null;
    if (!familiar1.dataset.targetObject) {
        petToSend = familiar1;
    } else if (!familiar2.dataset.targetObject) {
        petToSend = familiar2;
    } else if (!familiar3.dataset.targetObject) {
        petToSend = familiar3;
    } else if (!familiar4.dataset.targetObject) {
        petToSend = familiar4;
    } else if (!familiar5.dataset.targetObject) {
        petToSend = familiar5;
    }
    else {
        petsOnPlayer = 5; // Reset pets on player
        window.petsOnobject1 = 0;
        window.petsOnobject2 = 0;
        window.petsOnobject3 = 0;

        familiar1.dataset.targetObject = "";
        familiar2.dataset.targetObject = "";
        familiar3.dataset.targetObject = "";
        familiar4.dataset.targetObject = "";
        familiar5.dataset.targetObject = "";
        const spreadAngle = (2 * Math.PI) / petsOnPlayer;
        [familiar1, familiar2, familiar3, familiar4, familiar5].forEach((familiar, index) => {
            const angle = index * spreadAngle;
            const newX = playerX + petFollowRadius * Math.cos(angle);
            const newY = playerY + petFollowRadius * Math.sin(angle);
            movePets(newX, newY, familiar);
        });
        return; // Exit the function if no pet is available
    }

    if (petToSend) {
        petToSend.dataset.targetObject = object.id; // Update dataset status
        sendPets(object, petToSend);
    }
}

function sendPets(object, sentPet) {
    const rect = object.getBoundingClientRect();
    const centerX = (rect.left + rect.right) / 2;
    const centerY = (rect.top + rect.bottom) / 2;

    const spreadAngle = (2 * Math.PI) / window["petsOn" + object.id];

    if (window["petsOn" + object.id] === 1) {
        const angleToPet = Math.atan2(centerY - sentPet.getBoundingClientRect().top, centerX - sentPet.getBoundingClientRect().left);
        const newX = centerX - petObjectRadius * Math.cos(angleToPet);
        const newY = centerY - petObjectRadius * Math.sin(angleToPet);
        movePets(newX, newY, sentPet);
    } else {
        [familiar1, familiar2, familiar3, familiar4, familiar5].forEach((pet, index) => {
            if (pet.dataset.targetObject === object.id) {
                const angle = index * spreadAngle;
                const newX = centerX + petObjectRadius * Math.cos(angle);
                const newY = centerY + petObjectRadius * Math.sin(angle);
                movePets(newX, newY, pet);
            }
        });
    }

    setTimeout(() => {
        attackObjectLoop(object.id, sentPet);
    }, 1000);
}

function attackObjectLoop(objectId, pet) {
    const object = document.getElementById(objectId);
    const attackInterval = setInterval(() => {
        if (objectId !== pet.dataset.targetObject) {
            clearInterval(attackInterval);
        } else {
            objectHealths[objectId] -= petDmg;
            if (objectHealths[objectId] <= 0) {
                clearInterval(attackInterval);
                object.style.display = 'none';
                targetObjectId = null;
                money += moneyFromObjects;
                const tlfTall = Math.floor(Math.random() * 10) + 1;
                console.log(tlfTall);
                if (tlfTall == 1) {
                    diamonds += diamondsFromObjects;
                    showAlert('Ekstra drop! Du fikk ' + diamondsFromObjects + ' diamanter', 'success')
                }
                objectsBroken++;
                coinsGained += moneyFromObjects;
                spawnObject(objectId);
                sendBackPets(objectId);
            }
            updateHealthBar(objectId, objectHealths[objectId]);
        }
    }, 1000);
    // Save the attack interval ID in the dataset of the pet for later reference
    pet.dataset.attackIntervalId = attackInterval;
}

function sendBackPets(objectId) {
    [familiar1, familiar2, familiar3, familiar4, familiar5].forEach(pet => {
        if (pet.dataset.targetObject === objectId) {
            pet.dataset.targetObject = ""; // Clear the dataset.targetObject property of the familiar
            // Stop the attack loop for this pet
            clearInterval(pet.dataset.attackIntervalId);
            pet.dataset.attackIntervalId = null;
            window["petsOn" + objectId] = 0;
            petsOnPlayer++;
        }
    });
    const spreadAngle = (2 * Math.PI) / petsOnPlayer;
    if (petsOnPlayer === 1) {
        const pet = [familiar1, familiar2, familiar3, familiar4, familiar5].find(pet => !isPetAttacking(pet));
        const angleToPet = Math.atan2(playerY - pet.getBoundingClientRect().top, playerX - pet.getBoundingClientRect().left);
        const newX = playerX - petFollowRadius * Math.cos(angleToPet);
        const newY = playerY - petFollowRadius * Math.sin(angleToPet);
        movePets(newX, newY, pet);
    } else {
        [familiar1, familiar2, familiar3, familiar4, familiar5].forEach((familiar, index) => {
            if (!isPetAttacking(familiar)) {
                const angle = index * spreadAngle;
                const newX = playerX + petFollowRadius * Math.cos(angle);
                const newY = playerY + petFollowRadius * Math.sin(angle);
                movePets(newX, newY, familiar);
            }
        });
    }
}

function spawnObject(objectId) {
    const object = document.getElementById(objectId);
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const maxX = windowWidth * 0.75;
    const maxY = windowHeight * 0.9;
    const randomX = (Math.random() * maxX);
    const randomY = parseFloat(Math.random() * maxY);

    object.style.top = randomY + 'px';
    object.style.left = randomX + 'px';
    object.style.display = 'block';

    objectHealths[objectId] = 50 + 250 * upgradeCoinsLevel;
    updateHealthBar(objectId, objectHealths[objectId]);
}


function initializeObjects() {
    const objectIds = ['object1', 'object2', 'object3', 'object4', 'object5', 'object6', 'object7', 'object8', 'object9'];
    objectIds.forEach(objectId => {
        spawnObject(objectId);
    });
}

window.onload = initializeObjects;

function updateHealthBar(objectId, health) {
    const maxHealth = 50 + 250 * upgradeCoinsLevel;
    const maxWidth = 50 + 10 * upgradeCoinsLevel; // Maximum width of the health bar in pixels

    // Calculate the width based on the percentage of health
    const width = (health / maxHealth) * maxWidth;

    // Update the width of the health bar
    const healthBar = document.getElementById(`health-bar${objectId.slice(-1)}`);
    healthBar.style.width = width + "px";
}

movePlayer();

//Money
const moneyBox = document.getElementById("moneyBox");
const freeMoneyBtn = document.getElementById("freeMoneyButton");

let money = 0;

function updateMoneyAmount() {
    moneyAmount.innerText = formatNumber(money);
}

function formatNumber(number) {
    if (number >= 1000000) {
        return number.toExponential(2);
    }
    else {
        return number.toFixed(0);
    }
}

freeMoneyBtn.addEventListener('click', freeMoney);

function freeMoney() {
    money += 100000000;
    coinsGained += 100000;
}

// Diamonds
const diamondBox = document.getElementById("diamondbox");
const freeDiamondsBtn = document.getElementById("freeDiamondsButton");

let diamonds = 0;

function updateDiamondAmount() {
    diamondAmount.innerText = formatNumber(diamonds);
}

freeDiamondsBtn.addEventListener('click', freeDiamonds);

function freeDiamonds() {
    diamonds += 10000;
}

//Wheel
const spinWheelBtn = document.getElementById('spinWheel');
let spinning = false;
let timeSinceLastSpin = 0;
let readyToSpin = true;
const cost = 1000;

spinWheelBtn.addEventListener('click', spinWheel);

function spinWheel() {
    if (readyToSpin == true) {
        timeSinceLastSpin = 0;
        readyToSpin = false;
        const spinner = document.getElementById('skinWheel');
        console.log("Spinning wheel...");

        spinner.classList.add('visible');

        const arrow = document.createElement('div');
        arrow.classList.add('arrow-down');
        document.body.appendChild(arrow);

        const randomDegree = 360 * (Math.random() * 5 + 1);
        console.log("Random degree:", randomDegree);

        const rotateValue = `rotate(${randomDegree}deg)`;
        console.log("Rotate value:", rotateValue);

        spinner.style.transform = rotateValue;

        let styleElement = document.getElementById('spinKeyframes');

        if (!styleElement) {
            styleElement = document.createElement('style');
            styleElement.id = 'spinKeyframes';
            document.head.appendChild(styleElement);
        }

        styleElement.innerHTML = `
      @keyframes spin {
          0% {
              transform: rotate(0deg);
          }
          100% {
              transform: ${rotateValue};
          }
      }
  `;

        spinner.style.animation = 'none';

        spinner.style.animation = 'spin 3s ease-in-out';

        setTimeout(() => {
            console.log("Spinning complete!");
            checkResult(randomDegree % 360);
            setTimeout(() => {
                timeSinceLastSpin = 0;
                readyToSpin = false;
                hideWheel();
                showObtainedItem();
                setTimeout(() => {
                    spinning = false;
                }, 1500);
            }, 250);
        }, 3000);
    }
    else {
        showAlert('Wheel is on cooldown ' + (60 - timeSinceLastSpin).toFixed(1) + ' seconds until next spin', 'error')
    }
}

let itemImage;

function checkResult(angle) {
    console.log("Checking result for angle:", angle);
    const sectionSize = 18;

    if (angle <= sectionSize) {
        itemImage = 'diamond.png';
        diamonds += 1000;
        showAlert('Du fikk 1000 diamanter!', 'success')
    } else if (angle <= 4 * sectionSize) {
        itemImage = 'diamond.png';
        diamonds += 250;
        showAlert('Du fikk 250 diamanter!', 'success')
    } else if (angle <= 10 * sectionSize) {
        itemImage = 'diamond.png';
        diamonds += 50;
        showAlert('Du fikk 50 diamanter!', 'success')
    } else if (angle <= 19.9 * sectionSize) {
        itemImage = 'diamond.png';
        diamonds += 10;
        showAlert('Du fikk 10 diamanter!', 'success')
    } else {
        itemImage = 'diamondChest.png';
        if (diamonds > 100) {
            diamonds *= 10;
            showAlert("DU VANT DEN HEMMELIGE PREMIEN (0,5% sjanse), DU HAR NÅ 10 GANGER SÅ MANGE DIAMONDS", "success");
        }
        else {
            diamonds += 10000;
            showAlert("DU VANT DEN HEMMELIGE PREMIEN (0,5% sjanse), DU FIKK 10000 DIAMANTER", "success");
        }

    }

}

function hideWheel() {
    const spinner = document.getElementById('skinWheel');
    spinner.classList.remove('visible');
    spinner.style.animation = '';
    const arrow = document.querySelector('.arrow-down');
    if (arrow) {
        arrow.remove();
    }
}

function showObtainedItem() {
    const obtainedItem = document.createElement('img');
    obtainedItem.classList.add('obtainedItem');
    obtainedItem.src = `Bilder/${itemImage}`;
    document.body.appendChild(obtainedItem);

    setTimeout(() => {
        obtainedItem.remove();
        console.log(diamonds)
    }, 1750);
}

function removeObtainedItem() {
    const obtainedItem = document.querySelector('.obtainedItem');
    if (obtainedItem) {
        obtainedItem.remove();
    }
}

// Repeater
setInterval(() => {
    updateMoneyAmount();
    updateDiamondAmount();
    updateAchievements();
    completedAchievements.innerText = completedAchievementsCounter;
    playedTime += 0.1;
    timeSinceLastSpin += 0.1;
    if (timeSinceLastSpin >= 60) {
        readyToSpin = true;
    }
}, 100);

// Eggs
const petSlots = document.querySelectorAll('.petSlot');
let randomPet;
let petsInInventory = 0;
let delay = false;

const pets = {
    chicken: {
        name: 'Chicken',
        attack: 5,
        coinMultiplier: 1,
        diamondMultiplier: 1,
        image: 'Bilder/chicken.png'
    },
    zombie: {
        name: 'Zombie',
        attack: 5,
        coinMultiplier: 1,
        diamondMultiplier: 1,
        image: 'Bilder/zombie.png'
    },
    steve: {
        name: 'Steve',
        attack: 5,
        coinMultiplier: 1,
        diamondMultiplier: 1,
        image: 'Bilder/steve.png'
    },
    pete: {
        name: 'Pete',
        attack: 10,
        coinMultiplier: 1.1,
        diamondMultiplier: 1,
        image: 'Bilder/pete.png'
    },
    rock: {
        name: 'The Rock',
        attack: 12,
        coinMultiplier: 1.2,
        diamondMultiplier: 1,
        image: 'Bilder/rock.png'
    },
    kanye: {
        name: 'Kanye',
        attack: 15,
        coinMultiplier: 1.3,
        diamondMultiplier: 1.1,
        image: 'Bilder/kanye.png'
    },
    stewie: {
        name: 'Stewie',
        attack: 20,
        coinMultiplier: 1.3,
        diamondMultiplier: 1.1,
        image: 'Bilder/stewie.png'
    },
    peter: {
        name: 'Peter',
        attack: 25,
        coinMultiplier: 1.4,
        diamondMultiplier: 1.1,
        image: 'Bilder/peter.png'
    },
    brian: {
        name: 'Brian',
        attack: 35,
        coinMultiplier: 1.5,
        diamondMultiplier: 1.25,
        image: 'Bilder/brian.png'
    },
    monke: {
        name: 'Monke',
        attack: 35,
        coinMultiplier: 1.5,
        diamondMultiplier: 1.2,
        image: 'Bilder/monke.png'
    },
    panda: {
        name: 'Panda',
        attack: 40,
        coinMultiplier: 1.6,
        diamondMultiplier: 1.25,
        image: 'Bilder/panda.png'
    },
    sid: {
        name: 'Sid',
        attack: 50,
        coinMultiplier: 1.75,
        diamondMultiplier: 1.3,
        image: 'Bilder/sid.png'
    },
    capybara: {
        name: 'Capybara',
        attack: 75,
        coinMultiplier: 2,
        diamondMultiplier: 1.5,
        image: 'Bilder/capybara.png'
    },
    pikachu: {
        name: 'Pikachu',
        attack: 100,
        coinMultiplier: 2,
        diamondMultiplier: 1.5,
        image: 'Bilder/pikachu.png'
    },
    squirtle: {
        name: 'Squirtle',
        attack: 150,
        coinMultiplier: 2.25,
        diamondMultiplier: 1.5,
        image: 'Bilder/squirtle.png'
    },
    charmander: {
        name: 'Charmander',
        attack: 250,
        coinMultiplier: 2.5,
        diamondMultiplier: 1.75,
        image: 'Bilder/charmander.png'
    },
    infernape: {
        name: 'Infernape',
        attack: 500,
        coinMultiplier: 3,
        diamondMultiplier: 2,
        image: 'Bilder/infernape.png'
    },
    
};

document.addEventListener('keydown', (e) => {
    if (e.key in keys) {
        keys[e.key] = true;

        if ((e.key === 'e' || e.key === 'E') && delay == false) {
            eggs.forEach((egg, index) => {
                const buyEggsBtn = document.getElementById(`buyEggsBtn${index + 1}`);
                if (!buyEggsBtn.classList.contains('hidden')) {
                    buyEggsBtn.click();
                }
            });
        }
    }
}); 321

let isDisplayingEggOrPet = false;

function buyEgg(eggIndex) {
    if (!delay && petsInInventory < 32) {
        delay = true;
        setTimeout(() => {
            delay = false;
        }, 2000);
        if (isDisplayingEggOrPet) {
            showAlert('Finish opening the current egg or pet before buying another one.', 'error');
            return;
        }

        const eggCosts = [1000, 7500, 50000, 400000, 5000000];
        const eggCost = eggCosts[eggIndex - 1];
        const tlfTall = Math.floor(Math.random() * 100) + 1;

        let randomPet;
        if (eggIndex == 1 && money >= eggCost) {
            money -= eggCost;
            console.log(`Buying egg ${eggIndex}`);
            if (tlfTall <= 34) {
                randomPet = 'chicken';
            } else if (tlfTall <= 67) {
                randomPet = 'zombie';
            } else {
                randomPet = 'steve';
            }
        } else if (eggIndex == 2 && money >= eggCost) {
            money -= eggCost;
            console.log(`Buying egg ${eggIndex}`);
            if (tlfTall <= 50) {
                randomPet = 'pete';
            } else if (tlfTall <= 80) {
                randomPet = 'rock';
            } else {
                randomPet = 'kanye';
            }
        } else if (eggIndex == 3 && money >= eggCost) {
            money -= eggCost;
            console.log(`Buying egg ${eggIndex}`);
            if (tlfTall <= 45) {
                randomPet = 'stewie';
            } else if (tlfTall <= 85) {
                randomPet = 'peter';
            } else {
                randomPet = 'brian';
            }
        } else if (eggIndex == 4 && money >= eggCost) {
            money -= eggCost;
            console.log(`Buying egg ${eggIndex}`);
            if (tlfTall <= 40) {
                randomPet = 'monke';
            } else if (tlfTall <= 70) {
                randomPet = 'panda';
            } else if (tlfTall <= 90) {
                randomPet = 'sid';
            } else {
                randomPet = 'capybara';
            }
        } else if (eggIndex == 5 && money >= eggCost) {
            money -= eggCost;
            console.log(`Buying egg ${eggIndex}`);
            if (tlfTall <= 50) {
                randomPet = 'pikachu';
            } else if (tlfTall <= 85) {
                randomPet = 'squirtle';
            } else if (tlfTall <= 95) {
                randomPet = 'charmander';
            } else {
                randomPet = 'infernape';
            }
        } else {
            showAlert('You dont have enough money to buy egg ' + eggIndex, 'error');
            return;
        }
        isDisplayingEggOrPet = true;
        displayEgg(eggIndex, randomPet);
    } else if (petsInInventory === 32) {
        showAlert('Inventory is full! Delete a pet to open more eggs', 'error');
    }
}

function displayEgg(eggIndex, randomPet) {
    const eggContainer = document.createElement('div');
    eggContainer.classList.add('eggContainer');

    const eggImage = document.createElement('img');
    eggImage.src = `Bilder/egg${eggIndex}.png`;
    eggImage.classList.add('eggImage');
    eggImage.setAttribute('data-pet', randomPet);
    eggImage.addEventListener('click', openEgg);

    const clickText = document.createElement('div');
    clickText.classList.add('clickText');
    clickText.innerText = 'Click the egg to open';

    eggContainer.appendChild(clickText);
    eggContainer.appendChild(eggImage);
    document.body.appendChild(eggContainer);
}

function openEgg(event) {
    const eggImage = event.target.closest('.eggImage');
    if (!eggImage) return;
    eggImage.classList.add('shake');
    eggImage.removeEventListener('click', openEgg);

    setTimeout(() => {
        const randomPet = eggImage.getAttribute('data-pet');
        eggImage.parentElement.remove();
        addPetToInventory(randomPet);
        displayPet(randomPet);
    }, 1000); // Shake for 1 second before revealing the pet
}


function displayPet(randomPet) {
    const obtainedPet = document.createElement('img');
    obtainedPet.classList.add('obtainedItem');
    obtainedPet.src = `Bilder/${randomPet}.png`;
    document.body.appendChild(obtainedPet);

    setTimeout(() => {
        obtainedPet.remove();
        isDisplayingEggOrPet = false;
    }, 1750);
}


function addPetToInventory(randomPet) {
    for (let i = 1; i <= petSlots.length; i++) {
        const petSlot = document.getElementById(`petSlot${i}`);
        if (!petSlot.style.backgroundImage) {
            petsInInventory++;
            petSlot.style.backgroundImage = `url('Bilder/${randomPet}.png')`;
            return;
        }
    }
}

petSlots.forEach(petSlot => {
    petSlot.addEventListener('click', () => petInfo(petSlot));
});

function petInfo(petSlot) {
    if (isMultiDeleteMode) return; 

    const existingInfoPage = document.querySelector('.petInfoPage');
    if (existingInfoPage) {
        existingInfoPage.remove();
    }

    if (petSlot.style.backgroundImage) {
        const petImage = petSlot.style.backgroundImage.slice(5, -2);
        const pet = Object.values(pets).find(p => p.image === petImage);

        if (pet) {
            const petInfoPage = document.createElement('div');
            petInfoPage.classList.add('petInfoPage');
            petInfoPage.innerHTML = `
                <h2>${pet.name}</h2>
                <img src="${pet.image}" alt="${pet.name}">
                <p>Attack: ${pet.attack}</p>
                <p>Coin Multiplier: ${pet.coinMultiplier}</p>
                <p>Diamond Multiplier: ${pet.diamondMultiplier}</p>
                <button id="deletePet">Delete Pet</button>
                <button id="closeInfo">Close</button>
            `;
            document.body.appendChild(petInfoPage);

            document.getElementById('closeInfo').addEventListener('click', () => {
                petInfoPage.remove();
            });

            document.getElementById('deletePet').addEventListener('click', () => {
                petSlot.style.backgroundImage = '';
                petInfoPage.remove();
                petsInInventory--;
            });
        }
    }
}

function closeAllPetInfoTabs() {
    const petInfoTabs = document.querySelectorAll('.petInfoPage');
    petInfoTabs.forEach(tab => tab.remove());
}

// Multi delete btn
let isMultiDeleteMode = false;
let selectedPets = [];

document.getElementById('multiDelete').addEventListener('click', toggleMultiDelete);

function toggleMultiDelete() {
    if (!isMultiDeleteMode) {
        isMultiDeleteMode = true;
        document.getElementById('multiDelete').textContent = 'Confirm Delete';
        petSlots.forEach(petSlot => {
            petSlot.addEventListener('click', selectPetForDeletion);
        });
    } else {
        isMultiDeleteMode = false;
        document.getElementById('multiDelete').textContent = 'Multi Delete';
        petSlots.forEach(petSlot => {
            petSlot.removeEventListener('click', selectPetForDeletion);
        });
        if (selectedPets.length > 0) {
            if (confirm('Are you sure you want to delete all selected pets?')) {
                selectedPets.forEach(petSlot => {
                    petSlot.style.backgroundImage = '';
                    petSlot.style.backgroundColor = ''; 
                });
                petsInInventory -= selectedPets.length;
            } else {
                selectedPets.forEach(petSlot => {
                    petSlot.style.backgroundColor = ''; 
                });
            }
            selectedPets = [];
        }
    }
}

function selectPetForDeletion(event) {
    const petSlot = event.currentTarget;
    if (petSlot.style.backgroundImage) {
        if (selectedPets.includes(petSlot)) {
            petSlot.style.backgroundColor = '';
            selectedPets = selectedPets.filter(slot => slot !== petSlot);
        } else {
            petSlot.style.backgroundColor = 'rgba(255, 0, 0, 0.5)'; 
            selectedPets.push(petSlot);
        }
    }
}







