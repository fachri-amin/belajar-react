listnama_pembeli = []
listalamat_pembeli = []
listNIK_pembeli = []
listnomor_kartu_keluarga = []
listnomor_telepone = []
listjumlah_gaji_bulanan = []
listtype_mobil = []
listnama_type_mobil = []
listwarna_mobil = []
listnama_warna_mobil = []
listsistem_pembayaran = []
listnama_sistem_pembayaran = []
nama = input("nama marketing :")
jumlah = int(input("masukkan jumlah pembeli:"))

for i in range(jumlah):
    nama_pembeli = input("masukkan nama pembeli :")
    listnama_pembeli.append(nama_pembeli)
    alamat_pembeli = input("masukkan alamat pembeli :")
    listalamat_pembeli.append(alamat_pembeli)
    NIK_pembeli = input("masukkan NIK:")
    listNIK_pembeli.append(NIK_pembeli)
    nomor_kartu_keluarga = input("nomor kartu keluarga :")
    listnomor_kartu_keluarga.append(nomor_kartu_keluarga)
    nomor_telepone = input("masukkan nomor telepone :")
    listnomor_telepone.append(nomor_telepone)
    jumlah_gaji_bulanan = int(input("jumlah gaji bulanan :"))
    listjumlah_gaji_bulanan.append(jumlah_gaji_bulanan)
    type_mobil = input(
        "masukkan type mobil  (A1/A2/A3/B1/B2/B3/C1/C2/C3/D1/D2/D3:")
    listnama_type_mobil.append(type_mobil)
    warna_mobil = input("masukkan warna mobil (P/A/H/O/M/K :")
    listwarna_mobil.append(warna_mobil)
    sistem_pembayaran = input("masukkan sistem pembayaran(C/K)")
    listsistem_pembayaran.append(sistem_pembayaran)

for i in range(jumlah):
    if listjumlah_gaji_bulanan[i] >= 8000000:
        Keterangan = "Lanjut"
    else:
        Keterangan = "Transaksi Tidak Dapat dilanjut"

for i in range(jumlah):
    if listtype_mobil[i] == "A1" or listtype_mobil[i] == "a1":
        type_mobil = "HONDA BRIO SMT"
        listnamatype_mobil.append(type_mobil)
    elif listtype_mobil[i] == "A2" or listtype_mobil[i] == "a2":
        type_mobil = "HONDA BRIO EMT"
        listnama_type_mobil.append(type_mobil)
    elif listtype_mobil[i] == "A3" or listtype_mobil[i] == "a3":
        type_mobil = "HONDA BRIO RSAT"
        listnama_type_mobil.append(type_mobil)
    elif listtype_mobil[i] == "B1" or listtype_mobil[i] == "b1":
        type_mobil = "HONDA MOBILIO ECVT"
        listnama_type_mobil.append(type_mobil)
    elif listtype_mobil[i] == "B2" or listtype_mobil[i] == "b2":
        type_mobil = "HONDA MOBILIO RSMT"
        listnama_type_mobil.append(type_mobil)
    elif listtype_mobil[i] == "B3" or listtype_mobil[i] == "b3":
        type_mobil = "HONDA MOBILIO RSCVT"
        listnama_type_mobil.append(type_mobil)
    elif listtype_mobil[i] == "C1" or listtype_mobil[i] == "c1":
        type_mobil = "HONDA CRV CVT"
        listnama_type_mobil.append(type_mobil)
    elif listtype_mobil[i] == "C2" or listtype_mobil[i] == "c2":
        type_mobil = "HONDA CRV TURBO"
        listnama_type_mobil.append(type_mobil)
    elif listtype_mobil[i] == "C3" or listtype_mobil[i] == "c3":
        type_mobil = "HONDA CRV PRESTIGE"
        listnama_type_mobil.append(type_mobil)
    elif listtype_mobil[i] == "D1" or listtype_mobil[i] == "d1":
        type_mobil = "HONDA HRV SMT"
        listnama_type_mobil.append(type_mobil)
    elif listtype_mobil[i] == "D2" or listtype_mobil[i] == "d2":
        type_mobil = "HONDA HRV CVT"
        listnama_type_mobil.append(type_mobil)
    elif listtype_mobil[i] == "D3" or listtype_mobil[i] == "d3":
        type_mobil = "HONDA HRV PRESTIGE"
        listnama_type_mobil.append(type_mobil)
    else:
        type_mobil = "."
        listnama_type_mobil.append(type_mobil)
for i in range(jumlah):
    if listwarna_mobil[i] == "P" or listwarna_mobil[i] == "p":
        warna_mobil = "PUTIH"
        listnama_warna_mobil.append(warna_mobil)
    elif listwarna_mobil[i] == "A" or listwarna_mobil[i] == "a":
        warna_mobil = "ABU-ABU"
        listnama_warna_mobil.append(warna_mobil)
    elif listwarna_mobil[i] == "H" or listwarna_mobil[i] == "h":
        warna_mobil = "HITAM"
        listnama_warna_mobil.append(warna_mobil)
    elif listwarna_mobil[i] == "O" or listwarna_mobil[i] == "o":
        warna_mobil = "ORANGE"
        listnama_warna_mobil.append(warna_mobil)
    elif listwarna_mobil[i] == "M" or listwarna_mobil[i] == "m":
        warna_mobil = "MERAH"
        listnama_warna_mobil.append(warna_mobil)
    elif listwarna_mobil[i] == "K" or listwarna_mobil[i] == "k":
        warna_mobil = "KUNING"
        listnama_warna_mobil.append(warna_mobil)
    else:
        warna_mobil = "."
        listnama_warna_mobil.append(warna_mobil)
for i in range(jumlah):
    if listsistem_pembayaran[i] == "C" or listsistem_pembayaran[i] == "c":
        sistem_pembayaran = "CASH"
        listnama_sistem_pembayaran.append(sistem_pembayaran)
    elif listsistem_pembayaran[i] == "K" or listsistem_pembayaran[i] == "k":
        sistem_pembayaran = "KREDIT"
        listnama_sistem_pembayaran.append(sistem_pembayaran)
    else:
        sistem_pembayaran = "."
        listnama_sistem_pembayaran.append(sistem_pembayaran)

for i in range(jumlah):
    print("nama pembeli =", listnama_pembeli[i])
    print("alamat pembeli =", listalamat_pembeli[i])
    print("NIK pembeli =", listNIK_pembeli[i])
    print("nomor kartu keluarga pembeli =", listnomor_kartu_keluarga[i])
    print("nomor telepone =", listnomor_telepone[i])
    print("Gaji Bulanan=", listjumlah_gaji_bulanan[i])
    print("Type Mobil=", listnama_type_mobil[i])
    print("Warna Mobil=", listnama_warna_mobil[i])
    print("sistem pembayaran=", listnama_sistem_pembayaran[i])
