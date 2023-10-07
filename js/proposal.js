document.addEventListener('DOMContentLoaded', () => {
    const proyekInfoDiv = document.getElementById('proyek-info');

    const proyekData = {
        "Judul": "Build and Deploy a Full Stack MERN Next.js 13 Threads App | React, Next JS, TypeScript, MongoDB",
        "Proposal": "proyek 2",
        "Ditunjukan": "Sebagai salah satu Syarat untuk Memperoleh Nilai Pada Kegiatan Proyek 2 Program Studi DIV Teknik Informatika",
        "logo": "https://raw.githubusercontent.com/Fancyyy21/cobainrepo/main/assets/img/logoulbi.png",
        "Program": "Studi Diploma IV Teknik Informatika Universitas Logistik dan Bisnis Internasional 2022"
    };

    // Membuat elemen-elemen HTML untuk menampilkan data proyek
    const proyekTitle = document.createElement('p');
    proyekTitle.textContent = proyekData.Judul;

    const proyekProposal = document.createElement('p');
    proyekProposal.textContent = `Proposal: ${proyekData.Proposal}`;

    const proyekDescription = document.createElement('p');
    proyekDescription.textContent = proyekData.Ditunjukan;

    const proyekLogo = document.createElement('img');
    proyekLogo.src = proyekData.logo;
    proyekLogo.alt = 'Logo Proyek';

    const proyekProgram = document.createElement('p');
    proyekProgram.textContent = `Program: ${proyekData.Program}`;

    // Menambahkan elemen-elemen HTML ke dalam div proyek-info
    proyekInfoDiv.appendChild(proyekTitle);
    proyekInfoDiv.appendChild(proyekProposal);
    proyekInfoDiv.appendChild(proyekDescription);
    proyekInfoDiv.appendChild(proyekLogo);
    proyekInfoDiv.appendChild(proyekProgram);
});
