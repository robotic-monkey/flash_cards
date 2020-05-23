<?php

namespace App\Controller;

use App\Entity\Radicals;
use App\Repository\RadicalsRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;


  /**
     * @Route("/api/radicals", name="radicals")
     */

class RadicalsController extends AbstractController
{
    private $entityManager;
    private $radicalsRepository;


    public function __construct(EntityManagerInterface $entityManager, RadicalsRepository $radicalsRepository)
    {
        $this->entityManager = $entityManager;
        $this->radicalsRepository = $radicalsRepository;
        #echo 'console.log("podapsod!")';
    }


/**
     * @Route("/read", name="api_radicals_read", methods={"GET"})
     */
    public function read()
    {

       
        $radicals = $this->radicalsRepository->findAll();

        $arrayOfRadicals = [];
        foreach ($radicals as $radical) {
            $arrayOfRadicals[] = $radical->toArray();
        }
        return $this->json($arrayOfRadicals);

    }


    /**
     * @Route("/read", name="radicals")
     */
    public function index()
    {
        $radicals = $this->radicalsRepository->findAll();
        $arrayOfRadicals = [];
        foreach ($radicals as $radical){
            $arrayOfRadicals[] = $radical->toArray();
        }
        return $this->json($arrayOfRadicals);
    }
}
