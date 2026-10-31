// รายการเมนูอาหารอย่างน้อย 5 รายการ (กำหนดไว้ 6 รายการ)
const foodMenuList = [
  {
    name: "ข้าวมันไก่",
    image: "images/khao-man-gai.jpg",
    description: "ข้าวมันหอมนุ่ม เสิร์ฟพร้อมไก่ต้มเนื้อฉ่ำ น้ำซุปร้อนๆ และน้ำจิ้มเต้าเจี้ยวสูตรเด็ด",
    price: "ราคา 50 - 60 บาท"
  },
  {
    name: "ผัดไทยกุ้งสด",
    image: "images/pad-thai.jpg",
    description: "เส้นจันทน์เหนียวนุ่ม ผัดซอสมะขามเปียกเข้มข้น กุ้งสดตัวโต ถั่วงอกกรอบ และถั่วลิสงคั่วบด",
    price: "ราคา 60 - 70 บาท"
  },
  {
    name: "ผัดกะเพราหมูกรอบ",
    image: "images/krapow.jpg",
    description: "หมูกรอบชิ้นหนาผัดพริกกระเทียมและใบกะเพราป่ารสจัดจ้าน เผ็ดร้อนถึงใจ เสิร์ฟกับข้าวสวยร้อนๆ",
    price: "ราคา 55 - 65 บาท"
  },
  {
    name: "ส้มตำไทย",
    image: "images/som-tum.jpg",
    description: "มะละกอกรอบสด ตำคลุกเคล้ารสเปรี้ยว หวาน เค็ม ครบรส",
    price: "ราคา 50 - 60 บาท"
  },
  {
    name: "ต้มยำกุ้งน้ำข้น",
    image: "images/tom-yum.jpg",
    description: "ต้มยำน้ำข้นใส่นมสดและมันกุ้ง หอมกลิ่นสมุนไพร ข่า ตะไคร้ ใบมะกรูด และมะนาวแท้",
    price: "ราคา 80 - 100 บาท"
  },
  {
    name: "ข้าวซอยไก่",
    image: "images/khao-soi.jpg",
    description: "แกงข้าวซอยสูตรเข้มข้นสไตล์ล้านนา น่องไก่นุ่มละมุน เสิร์ฟคู่บะหมี่กรอบ ผักกาดดอง และหอมแดง",
    price: "ราคา 60 - 75 บาท"
  }
];

// ดึง Elements จาก DOM
const foodImg = document.getElementById("food-img");
const foodName = document.getElementById("food-name");
const foodDesc = document.getElementById("food-desc");
const foodPrice = document.getElementById("food-price");
const randomBtn = document.getElementById("random-btn");
const foodCard = document.getElementById("food-card");

let currentIndex = 0;

// ฟังก์ชันสุ่มเมนูอาหาร (ไม่ให้ได้เมนูซ้ำกับปัจจุบันทันที)
function getRandomFood() {
  let nextIndex;
  do {
    nextIndex = Math.floor(Math.random() * foodMenuList.length);
  } while (nextIndex === currentIndex && foodMenuList.length > 1);

  currentIndex = nextIndex;
  displayFood(foodMenuList[currentIndex]);
}

// ฟังก์ชันอัปเดตข้อมูลบนหน้าเว็บ
function displayFood(food) {
  // ใส่ Effect ป๊อปอัปให้การ์ดดูมีชีวิตชีวา
  foodCard.classList.remove("animate-pop");
  void foodCard.offsetWidth; // Trigger reflow
  foodCard.classList.add("animate-pop");

  foodImg.src = food.image;
  foodImg.alt = food.name;
  foodName.textContent = food.name;
  foodDesc.textContent = food.description;
  foodPrice.textContent = food.price;
}

// ผูก Event Listener เมื่อคลิกปุ่มสุ่ม
randomBtn.addEventListener("click", getRandomFood);
