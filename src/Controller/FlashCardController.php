<?php

namespace App\Controller;

use App\Entity\FlashCard;
use App\Repository\FlashCardRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

  /**
     * @Route("/api/flashcard", name="flash_card")
     */

class FlashCardController extends AbstractController
{
    private $entityManager;
    private $flashcardRepository;


    public function __construct(EntityManagerInterface $entityManager, FlashCardRepository $flashcardRepository)
    {
        $this->entityManager = $entityManager;
        $this->flashcardRepository = $flashcardRepository;
    }


/**
     * @Route("/read", name="api_flashcard_read", methods={"GET"})
     */
    public function read()
    {
        $cards = $this->flashcardRepository->findAll();

        $arrayOfFlashcards = [];
        foreach ($cards as $card) {
            $arrayOfFlashcards[] = $card->toArray();
        }
        return $this->json($arrayOfFlashcards);

    }


    /**
     * @Route("/read", name="flash_card")
     */
    public function index()
    {
        $cards = $this->flashcardRepository->findAll();
        $arrayOfCards = [];
        foreach ($cards as $card){
            $arrayOfCards[] = $card->toArray();
        }
        return $this->json($arrayOfCards);
    }
}
