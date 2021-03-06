"use strict";
var response = require("./res");
var connection = require("./koneksi");
exports.index = function (req, res) {
  response.ok("REST API Berjalan!", res);
};

// menampilkan semua data mahasiswa
exports.tampilsemuamahasiswa = function (req, res) {
  connection.query("SELECT * FROM mahasiswa", function (error, rows, fields) {
    if (error) {
      connection.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// menampilkan semua data mahasiswa berdasarkan id
exports.tampilberdasarkanid = function (req, res) {
  let id = req.params.id;
  connection.query(
    "SELECT * FROM mahasiswa WHERE id_mahasiswa = ?",
    [id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

// tambah data mahasiswa
exports.tambahMahasiswa = function (req, res) {
  var nim = req.body.nim;
  var nama = req.body.nama;
  var jurusan = req.body.jurusan;

  connection.query(
    "INSERT INTO mahasiswa (nim,nama,jurusan) VALUES(?,?,?)",
    [nim, nama, jurusan],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil menambahkan data", res);
      }
    }
  );
};

// ubah data mahasiswa berdasarkan id
exports.ubahMahasiswa = function (req, res) {
  var id_mahasiswa = req.body.id_mahasiswa;
  var nim = req.body.nim;
  var nama = req.body.nama;
  var jurusan = req.body.jurusan;
  connection.query(
    "UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?",
    [nim, nama, jurusan, id_mahasiswa],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil mengubah data mahasiswa", res);
      }
    }
  );
};

// delete data mahasiswa
exports.hapusMahasiswa = function (req, res) {
  var id_mahasiswa = req.body.id_mahasiswa;
  connection.query(
    "DELETE FROM mahasiswa WHERE id_mahasiswa=?",
    [id_mahasiswa],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil menghapus data", res);
      }
    }
  );
};

// menampilkan matakuliah group
exports.tampilGroupMatakuliah = function (req, res) {
  connection.query(
    "SELECT a.id_mahasiswa,a.nim,a.nama,a.jurusan,c.matakuliah,c.sks FROM mahasiswa a JOIN krs b ON a.id_mahasiswa=b.id_mahasiswa JOIN matakuliah c ON c.id_matakuliah=b.id_matakuliah ORDER by a.id_mahasiswa",
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.oknested(rows, res);
      }
    }
  );
};
