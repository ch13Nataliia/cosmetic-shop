import nc from 'next-connect';
import {
  getProducts,
  addProduct,
  updateProduct,
  removeProduct,
} from '@/lib/api-functions/server/products/controllers';

const baseRoute = '/api/v2/products/:id?';

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end('Something broke!');
  },
  onNoMatch: (req, res) => {
    res.status(404).end('Not Found');
  },
  attachParams: true,
})
  .get(baseRoute, async (req, res) => {
    getProducts(req, res);
  })

  .post(baseRoute, async (req, res) => {
    addProduct(req, res);
  })
  .put(baseRoute, async (req, res) => {
    updateProduct(req, res);
  })
  .delete(baseRoute, async (req, res) => {
    removeProduct(req, res);
  });

export default handler;
