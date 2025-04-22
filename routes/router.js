const exp = require('express');
const router = exp.Router();
const controlProducto = require('../backend/controller/productos.controller');
const controlUsuario = require('../backend/controller/usuarios.controller');


router.get('/usuarios',controlUsuario.buscar);
router.get('/usuarios/:x',controlUsuario.buscarPorNom);
router.get('/usuarios/:cc',controlUsuario.buscarPorCc);
router.post('/usuarios',controlUsuario.insertar);
router.put('/usuarios-actualizar/:cc',controlUsuario.actualizar);
router.delete('/usuarios-eliminar/:cc',controlUsuario.eliminar);

router.get('/productos',controlProducto.buscar);
router.get('/productos/:x',controlProducto.buscarPorNom);
router.get('/productos/ref/:ref',controlProducto.buscarPorRef);
router.post('/productos/post',controlProducto.insertar);
router.put('/productos-ingresar/:ref',controlProducto.actualizar);
router.delete('/productos-eliminar/:ref',controlProducto.eliminar);

module.exports = router