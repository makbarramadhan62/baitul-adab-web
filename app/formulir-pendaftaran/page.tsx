export default function RegistrationForm() {
  return (
    <div
      className="min-h-screen flex w-full flex-col items-center overflow-x-hidden bg-primary-content py-8"
      style={{
        backgroundImage: "url(/image/formulir-pendaftaran/bg.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="card p-8 bg-base-100 w-2/3">
        <div className="flex flex-col gap-2 items-center mb-8">
          <span className="text-secondary-content text-5xl font-bold">
            Formulir Pendaftaran Sekolah
          </span>
          <span className="text-neutral text-2xl font-bold">
            BAITUL ADAB ISLAMIC SCHOOL
          </span>
        </div>
        <span className="text-[#9C9C9C] text-sm font-semibold text-center mb-8">
          Silahkan isi form dibawah ini untuk melakukan pendaftaran, pastikan
          isi data dengan benar
        </span>

        <form className="flex flex-col gap-8">
          <div className="card">
            <div className="flex flex-col gap-2 bg-primary px-8 py-4 rounded-lg mb-4">
              <span className="text-base-100 text-2xl font-bold">
                Data Diri Calon Siswa
              </span>
              <span className="text-base-100 text-sm font-semibold">
                Silahkan isi form data diri dibawah ini, pastikan isi data
                dengan benar
              </span>
            </div>

            <div className="flex flex-col gap-4 w-full mb-8">
              <div className="flex flex-col gap-2">
                <label className="text-neutral text-lg font-medium">
                  Nama Calon Siswa<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Masukkan nama calon siswa"
                  className="input input-bordered w-full text-neutral"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-neutral text-lg font-medium">
                  Nama Orang Tua / Wali<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Masukkan nama orangtua / wali"
                  className="input input-bordered w-full text-neutral"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-neutral text-lg font-medium">
                  No Hp Orang Tua / Wali<span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  placeholder="Masukkan nomor hp orangtua / wali"
                  className="input input-bordered w-full text-neutral"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-neutral text-lg font-medium">
                  Alamat Lengkap
                </label>
                <textarea
                  placeholder="Masukkan nomor hp orangtua / wali"
                  className="input input-bordered w-full text-neutral py-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <select className="select select-bordered w-full text-neutral bg-base-100">
                  <option disabled selected>
                    Pilih Jenjang Pendidikan
                  </option>
                  <option>TK</option>
                  <option>SD</option>
                  <option>SMP</option>
                  <option>SMA</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2 bg-primary px-8 py-4 rounded-lg mb-4">
              <span className="text-base-100 text-2xl font-bold">
                Data Berkas Calon Siswa
              </span>
              <span className="text-base-100 text-sm font-semibold">
                Silahkan isi form data berkas dibawah ini, pastikan isi data
                dengan benar
              </span>
            </div>

            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <label className="text-neutral text-lg font-medium">
                    Fotocopy Akte Kelahiran Calon Siswa
                    <span className="text-red-600">*</span>
                  </label>

                  <span className="text-[#FF5F00] font-semibold">
                    Max 2 Mb | Format PDF
                  </span>
                </div>
                <input
                  type="file"
                  className="w-full text-gray-500 font-medium text-base bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-primary file:hover:bg-blue-600 file:text-white rounded"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <label className="text-neutral text-lg font-medium">
                    Fotocopy Kartu Keluarga Calon Siswa
                    <span className="text-red-600">*</span>
                  </label>

                  <span className="text-[#FF5F00] font-semibold">
                    Max 2 Mb | Format PDF
                  </span>
                </div>
                <input
                  type="file"
                  className="w-full text-gray-500 font-medium text-base bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-primary file:hover:bg-blue-600 file:text-white rounded"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <label className="text-neutral text-lg font-medium">
                    Fotocopy KTP Orang Tua / Wali
                    <span className="text-red-600">*</span>
                  </label>

                  <span className="text-[#FF5F00] font-semibold">
                    Max 2 Mb | Format PDF
                  </span>
                </div>
                <input
                  type="file"
                  className="w-full text-gray-500 font-medium text-base bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-primary file:hover:bg-blue-600 file:text-white rounded"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <label className="text-neutral text-lg font-medium">
                    Pass Foto 3x4 Calon Siswa
                    <span className="text-red-600">*</span>
                  </label>

                  <span className="text-[#FF5F00] font-semibold">
                    Max 2 Mb | Format JPG, PNG, JPEG
                  </span>
                </div>
                <input
                  type="file"
                  className="w-full text-gray-500 font-medium text-base bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-primary file:hover:bg-blue-600 file:text-white rounded"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center mb-16">
            <button className="btn btn-primary text-base-100">
              KIRIM VIA WHATSAPP
            </button>
          </div>

          <div className="flex justify-between gap-4">
            <div className="text-neutral text-sm flex items-center gap-2">
              <i className="bi bi-telephone text-2xl"></i>
              <div className="font-semibold flex flex-col">
                <span>WhatsApp</span>
                <span className="text-secondary-content">03 5432 1234</span>
              </div>
            </div>
            <div className="text-neutral text-sm flex items-center gap-2">
              <i className="bi bi-envelope text-2xl"></i>
              <div className="font-semibold flex flex-col">
                <span>Email</span>
                <span className="text-secondary-content">
                  info@marcc.com.au
                </span>
              </div>
            </div>
            <div className="text-neutral text-sm flex items-center gap-2">
              <i className="bi bi-instagram text-2xl"></i>
              <div className="font-semibold flex flex-col">
                <span>Instagram</span>
                <span className="text-secondary-content">@baituladab</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
