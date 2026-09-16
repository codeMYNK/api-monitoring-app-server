import express from 'express';
import analyticsContainer from '../Dependencies/dependencies.js';
const { analyticsController } = analyticsContainer.controllers;
import authenticate from '../../../shared/middlewares/authenticate.js';
import authorize from '../../../shared/middlewares/authorize.js';

const router = express.Router();

router.get("/stats", authenticate, authorize(['super_admin', 'client_admin']), (req, res, next) => analyticsController.getStats(req, res, next));

router.get("/dashboard", authenticate, authorize(['super_admin', 'client_admin']), (req, res, next) => analyticsController.getDashboard(req, res, next))

export default router