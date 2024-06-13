"use client";

import { useRef, useState } from "react";

export default function RegistrationForm() {
  const initialFormData = {
    namaSiswa: "",
    namaOrangTua: "",
    noHp: "",
    alamat: "",
    jenjangPendidikan: "",
    files: {
      akteKelahiran: null,
      kartuKeluarga: null,
      ktpOrangTua: null,
      fotoSiswa: null,
    },
  };

  const [formData, setFormData] = useState(initialFormData);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const akteKelahiranRef = useRef(null);
  const kartuKeluargaRef = useRef(null);
  const ktpOrangTuaRef = useRef(null);
  const fotoSiswaRef = useRef(null);

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    if (
      name === "akteKelahiran" ||
      name === "kartuKeluarga" ||
      name === "ktpOrangTua" ||
      name === "fotoSiswa"
    ) {
      setFormData({
        ...formData,
        files: {
          ...formData.files,
          [name]: files[0],
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSuccess(false);

    try {
      const fileDataArray = await Promise.all(
        Object.keys(formData.files).map(async (key) => {
          // @ts-ignore
          const file = formData.files[key];
          if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            return new Promise((resolve, reject) => {
              reader.onloadend = () => {
                if (typeof reader.result === "string") {
                  resolve({
                    fileName: file.name,
                    fileType: file.type,
                    fileData: reader.result.split(",")[1],
                  });
                }
              };
              reader.onerror = reject;
            });
          }
          return null;
        }),
      );

      const cleanedFileDataArray = fileDataArray.filter(
        (file) => file !== null,
      );

      const data = {
        namaSiswa: formData.namaSiswa,
        namaOrangTua: formData.namaOrangTua,
        noHp: formData.noHp,
        alamat: formData.alamat,
        jenjangPendidikan: formData.jenjangPendidikan,
        files: cleanedFileDataArray,
      };

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbx-BVmOoFIReRWdjeblogfAVV053vECbF4-3rubJ4e6ftl85OYh_wYVjnYysb27fLeisg/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
        },
      );

      if (!response.ok) {
        console.log("Terjadi kesalahan saat mengirim data.");
      }

      setIsSuccess(true);
      setTimeout(() => resetForm(), 2500);
    } catch (error: any) {
      console.error("Error:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setIsSuccess(false);
    setIsLoading(false);

    // @ts-ignore
    if (akteKelahiranRef.current) akteKelahiranRef.current.value = "";
    // @ts-ignore
    if (kartuKeluargaRef.current) kartuKeluargaRef.current.value = "";
    // @ts-ignore
    if (ktpOrangTuaRef.current) ktpOrangTuaRef.current.value = "";
    // @ts-ignore
    if (fotoSiswaRef.current) fotoSiswaRef.current.value = "";
  };

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

        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
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
                  name="namaSiswa"
                  type="text"
                  placeholder="Masukkan nama calon siswa"
                  className="input input-bordered w-full text-neutral"
                  value={formData.namaSiswa}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-neutral text-lg font-medium">
                  Nama Orang Tua / Wali<span className="text-red-600">*</span>
                </label>
                <input
                  name="namaOrangTua"
                  type="text"
                  placeholder="Masukkan nama orangtua / wali"
                  className="input input-bordered w-full text-neutral"
                  value={formData.namaOrangTua}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-neutral text-lg font-medium">
                  No Hp Orang Tua / Wali<span className="text-red-600">*</span>
                </label>
                <input
                  name="noHp"
                  type="number"
                  placeholder="Masukkan nomor hp orangtua / wali"
                  className="input input-bordered w-full text-neutral"
                  value={formData.noHp}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-neutral text-lg font-medium">
                  Alamat Lengkap
                </label>
                <textarea
                  name="alamat"
                  placeholder="Masukkan alamat lengkap"
                  className="input input-bordered w-full text-neutral py-2"
                  value={formData.alamat}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <select
                  name="jenjangPendidikan"
                  className="select select-bordered w-full text-neutral bg-base-100"
                  value={formData.jenjangPendidikan}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Pilih Jenjang Pendidikan
                  </option>
                  <option value="TK">TK</option>
                  <option value="SD">SD</option>
                  <option value="SMP">SMP</option>
                  <option value="SMA">SMA</option>
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
                  ref={akteKelahiranRef}
                  onChange={handleChange}
                  name="akteKelahiran"
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
                  ref={kartuKeluargaRef}
                  onChange={handleChange}
                  name="kartuKeluarga"
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
                  ref={ktpOrangTuaRef}
                  onChange={handleChange}
                  name="ktpOrangTua"
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
                  ref={fotoSiswaRef}
                  onChange={handleChange}
                  name="fotoSiswa"
                  type="file"
                  className="w-full text-gray-500 font-medium text-base bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-primary file:hover:bg-blue-600 file:text-white rounded"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center mb-16">
            <button
              className="btn btn-primary text-base-100 w-1/4"
              disabled={isLoading}
            >
              {isLoading ? "Mengirim..." : "KIRIM"}
            </button>
          </div>

          {isSuccess && (
            <div className="toast toast-top toast-end">
              <div className="alert alert-success text-base-100">
                <span>Formulir Berhasil Dikirim</span>
              </div>
            </div>
          )}

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
