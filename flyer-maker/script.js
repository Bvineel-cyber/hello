// Home Page Functions
function openNameModal() {
    document.getElementById('nameModal').style.display = 'block';
}

function closeNameModal() {
    document.getElementById('nameModal').style.display = 'none';
}

function saveName() {
    const name = document.getElementById('nameInput').value.trim();
    if (name) {
        localStorage.setItem('userName', name);
        document.getElementById('userName').textContent = name;
        closeNameModal();
    } else {
        alert('Please enter a name');
    }
}

function goToEditor() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('editorPage').style.display = 'block';
}

function goHome() {
    document.getElementById('editorPage').style.display = 'none';
    document.getElementById('homePage').style.display = 'flex';
    resetFlyer();
}

// Load saved name on page load
window.addEventListener('load', function() {
    const savedName = localStorage.getItem('userName');
    if (savedName) {
        document.getElementById('userName').textContent = savedName;
    }
});

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('nameModal');
    if (event.target === modal) {
        closeNameModal();
    }
}

// Allow Enter key to save name
document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('nameInput');
    if (nameInput) {
        nameInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                saveName();
            }
        });
    }
});

// Editor Functions
let selectedElement = null;
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

function loadTemplate(templateName) {
    const flyer = document.getElementById('flyer');
    flyer.innerHTML = '';
    const template = templates[templateName];
    
    if (template) {
        template.forEach(element => {
            const el = document.createElement('div');
            el.className = 'flyer-element';
            el.style.left = element.x + 'px';
            el.style.top = element.y + 'px';
            el.style.width = element.width + 'px';
            el.style.fontSize = element.fontSize + 'px';
            el.style.color = element.color || '#000000';
            
            if (element.type === 'text') {
                el.className += ' flyer-text';
                el.textContent = element.content;
                el.style.fontWeight = element.fontWeight || 'normal';
            } else if (element.type === 'image') {
                el.className += ' flyer-image';
                el.innerHTML = `<img src="${element.src}" alt="${element.content}">`;
            }
            
            el.appendChild(createDeleteButton());
            flyer.appendChild(el);
            el.addEventListener('mousedown', selectElement);
        });
    }
}

function createDeleteButton() {
    const btn = document.createElement('button');
    btn.className = 'delete-btn';
    btn.textContent = '×';
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        this.parentElement.remove();
    });
    return btn;
}

function addText() {
    const text = document.getElementById('textInput').value;
    if (!text) {
        alert('Please enter text');
        return;
    }
    
    const flyer = document.getElementById('flyer');
    const el = document.createElement('div');
    el.className = 'flyer-element flyer-text';
    el.style.left = '50px';
    el.style.top = '50px';
    el.style.width = '300px';
    el.style.fontSize = '24px';
    el.style.color = '#000000';
    el.textContent = text;
    
    el.appendChild(createDeleteButton());
    flyer.appendChild(el);
    el.addEventListener('mousedown', selectElement);
    
    document.getElementById('textInput').value = '';
}

function addImage() {
    const file = document.getElementById('imageInput').files[0];
    if (!file) {
        alert('Please select an image');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const flyer = document.getElementById('flyer');
        const el = document.createElement('div');
        el.className = 'flyer-element flyer-image';
        el.style.left = '50px';
        el.style.top = '50px';
        el.style.width = '200px';
        el.style.height = '200px';
        el.innerHTML = `<img src="${e.target.result}" alt="Added image">`;
        
        el.appendChild(createDeleteButton());
        flyer.appendChild(el);
        el.addEventListener('mousedown', selectElement);
    };
    reader.readAsDataURL(file);
    
    document.getElementById('imageInput').value = '';
}

function selectElement(e) {
    if (selectedElement) {
        selectedElement.classList.remove('selected');
    }
    
    selectedElement = e.target.closest('.flyer-element');
    if (selectedElement) {
        selectedElement.classList.add('selected');
        isDragging = true;
        offsetX = e.clientX - selectedElement.getBoundingClientRect().left;
        offsetY = e.clientY - selectedElement.getBoundingClientRect().top;
    }
}

document.addEventListener('mousemove', function(e) {
    if (isDragging && selectedElement) {
        const flyer = document.getElementById('flyer');
        const rect = flyer.getBoundingClientRect();
        
        let x = e.clientX - rect.left - offsetX;
        let y = e.clientY - rect.top - offsetY;
        
        x = Math.max(0, Math.min(x, rect.width - selectedElement.offsetWidth));
        y = Math.max(0, Math.min(y, rect.height - selectedElement.offsetHeight));
        
        selectedElement.style.left = x + 'px';
        selectedElement.style.top = y + 'px';
    }
});

document.addEventListener('mouseup', function() {
    isDragging = false;
});

function setOrientation(orientation) {
    const flyer = document.getElementById('flyer');
    flyer.classList.remove('portrait', 'landscape');
    flyer.classList.add(orientation);
    
    document.getElementById('portraitBtn').classList.remove('active');
    document.getElementById('landscapeBtn').classList.remove('active');
    
    if (orientation === 'portrait') {
        document.getElementById('portraitBtn').classList.add('active');
    } else {
        document.getElementById('landscapeBtn').classList.add('active');
    }
}

function setBackgroundColor(color) {
    const flyer = document.getElementById('flyer');
    flyer.style.backgroundColor = color;
}

function updateFontSize() {
    const size = document.getElementById('fontSizeSlider').value;
    document.getElementById('fontSizeDisplay').textContent = size + 'px';
    
    if (selectedElement && selectedElement.classList.contains('flyer-text')) {
        selectedElement.style.fontSize = size + 'px';
    }
}

function updateTextColor() {
    const color = document.getElementById('textColorPicker').value;
    
    if (selectedElement && selectedElement.classList.contains('flyer-text')) {
        selectedElement.style.color = color;
    }
}

function resetFlyer() {
    document.getElementById('flyer').innerHTML = '';
    document.getElementById('flyer').style.backgroundColor = '#FFFFFF';
    document.getElementById('textInput').value = '';
    document.getElementById('imageInput').value = '';
    selectedElement = null;
}

function downloadPDF() {
    const element = document.getElementById('flyer');
    const opt = {
        margin: 0,
        filename: 'flyer.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'px', format: [element.offsetWidth, element.offsetHeight], orientation: 'portrait' }
    };
    
    html2pdf().set(opt).from(element).save();
}

function downloadPNG() {
    const element = document.getElementById('flyer');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = element.offsetWidth;
    canvas.height = element.offsetHeight;
    
    const html2canvas_script = document.createElement('script');
    html2canvas_script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
    
    html2canvas_script.onload = function() {
        html2canvas(element, { 
            backgroundColor: '#ffffff',
            scale: 2
        }).then(canvas => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = 'flyer.png';
            link.click();
        });
    };
    
    if (!window.html2canvas) {
        document.head.appendChild(html2canvas_script);
    } else {
        html2canvas(element, { 
            backgroundColor: '#ffffff',
            scale: 2
        }).then(canvas => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = 'flyer.png';
            link.click();
        });
    }
}
