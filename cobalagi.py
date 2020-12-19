data_pembeli = {
    'nama_pembeli': '',
    'alamat_pembeli': '',
    'NIK_pembeli': '',
    'nomor_kartu_keluarga': '',
    'nomor_telepone': '',
    'jumlah_gaji_bulanan': '',
    'type_mobil': '',
    'warna_mobil': '',
    'sistem_pembayaran': '',
}

tipe_mobil = {
    'A1': 'HONDA BRIO SMT',
    'A2': 'HONDA BRIO EMT',
    'A3': "HONDA BRIO RSAT",
    'B1': "HONDA MOBILIO ECVT",
    'B2': "HONDA MOBILIO RSMT",
    'B3': "HONDA MOBILIO RSCVT",
    'C1': "HONDA CRV CVT",
    'C2': "HONDA CRV TURBO",
    'C3': "HONDA CRV PRESTIGE",
    'D1': "HONDA HRV SMT",
    'D2': "HONDA HRV CVT",
    'D3': "HONDA HRV PRESTIGE",
}

pilihan_warna = {
    'P': 'PUTIH',
    'A': 'ABU-ABU',
    'H': 'HITAM',
    'O': 'ORANGE',
    'M': 'MERAH',
    'K': 'KUNING'
}

list_pembeli = []

input("nama marketing : ")
jumlah = int(input("masukkan jumlah pembeli : "))

for i in range(jumlah):
    temp_data = data_pembeli.copy()

    for key, value in temp_data.items():
        pertanyaan = key.replace("_", " ")
        if key == "jumlah_gaji_bulanan":
            temp_data[key] = int(input("Masukkan "+pertanyaan+" :"))
            if temp_data[key] <= 8000000:
                print("Transaksi tidak dapat dilanjutkan")
                temp_data = None
                break
        elif key == "type_mobil":
            tipe = input(
                "Masukkan "+pertanyaan+" (A1/A2/A3/B1/B2/B3/C1/C2/C3/D1/D2/D3):")
            tipe = tipe.upper()
            if tipe in tipe_mobil:
                for key_mobil, value_mobil in tipe_mobil.items():
                    if key_mobil == tipe:
                        tipe = value_mobil
            else:
                tipe = '-'
            temp_data[key] = tipe
        elif key == "warna_mobil":
            warna = input("Masukkan "+pertanyaan+"  (P/A/H/O/M/K):")
            warna = warna.upper()
            if warna in pilihan_warna:
                for key_warna, value_warna in pilihan_warna.items():
                    if key_warna == warna:
                        warna = value_warna
            else:
                warna = '-'
            temp_data[key] = warna
        elif key == "sistem_pembayaran":
            pembayaran = input("Masukkan "+pertanyaan+"  (C/K):")
            pembayaran = pembayaran.upper()
            if pembayaran == 'C':
                temp_data[key] = 'CASH'
            elif pembayaran == 'K':
                temp_data[key] = 'KREDIT'
        else:
            temp_data[key] = input("Masukkan "+pertanyaan+" :")

    if temp_data != None:
        list_pembeli.append(temp_data)

    print("="*25)

print('*** Data Pembeli ***')

for data in list_pembeli:
    for key, value in data.items():
        label = key.replace('_', ' ')
        print(label, "=", value)

    print("="*25)
